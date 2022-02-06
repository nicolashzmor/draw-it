import {createAction, createReducer} from "@reduxjs/toolkit";
import {GameState, InGameRound, InGameTeam, TEAM} from "../app.declarations";
import {TeamsValuesMap} from "../app.values";
import {reduce, sample, shuffle} from "lodash";
import allWords from './all.json';
import _shuffle from "lodash/shuffle";

function randomTeamKey(): TEAM {
    return sample(Object.values(TEAM)) as TEAM
}

function switchTeamKey(team: TEAM): TEAM {
    return Object.values(TEAM).find(t => t !== team) as TEAM
}

function nextRound(state: GameState): InGameRound {
    const nextTeam = state.teams[state.activeTeam];
    return {
        activeTeam: nextTeam,
        word: state.nextWord,
        currentPlayer: nextTeam.members[nextTeam.currentPlayerPosition] || 'No Player Selected'
    }
}

function setupNextWord(state: GameState): GameState {
    state.nextWord = state.words.shift() || 'HELLO';
    return state;
}

function setupNextPlayer(activeTeam: InGameTeam): InGameTeam{
    activeTeam.currentPlayerPosition =
        activeTeam.currentPlayerPosition >= activeTeam.members.length - 1
            ? 0
            : activeTeam.currentPlayerPosition + 1;
    return activeTeam
}

const initialState: GameState = {
    activeTeam: randomTeamKey(),
    teams: {
        [TEAM.OTTER]: {...TeamsValuesMap[TEAM.OTTER], members: [], score: 0, currentPlayerPosition: 0},
        [TEAM.PANDA]: {...TeamsValuesMap[TEAM.PANDA], members: [], score: 0, currentPlayerPosition: 0}
    },
    words: _shuffle(_shuffle(_shuffle(allWords))),
    nextWord: 'NO_SELECTED_WORD',
    round: null,
    winner: null,
    winningScore: 15,
    maxRounds: 20,
    timePerRound: 60,
    rounds: 0,
    configured: false
}

// GAME SETUP
export const changeActiveTeam = createAction<TEAM>('game/changeActiveTeam')
export const setupTeams = createAction<Record<TEAM, string[]>>('game/setupTeams')

// IN GAME
export const initGame = createAction<void>('game/initGame')
export const winRound = createAction<void>('game/winRound')
export const loseRound = createAction<void>('game/loseRound')
export const skipWord = createAction<void>('game/skipWord')
export const skipRound = createAction<void>('game/skipRound')
export const resetScores = createAction<void>('game/resetScores')
export const resetAll = createAction<void>('game/resetAll')

export const GameActions = {
    changeActiveTeam,
    setupTeams,
    // IN GAME
    initGame,
    loseRound,
    skipWord,
    skipRound,
    winRound,
    resetScores,
    resetAll
}

export const GameReducer = createReducer<GameState>(initialState, (builder) => {
        builder
            .addCase(setupTeams, (state, {payload: teams}) => {
                (Object.keys(teams) as TEAM[]).forEach((key: TEAM) => {
                    state.teams[key].members = teams[key]
                });
                state.configured = true;
            })
            .addCase(initGame, (state) => {
                setupNextWord(state)
                state.round = nextRound(state)
            })
            .addCase(loseRound, (state) => {
                state = setupNextWord(state)
                state.teams[state.activeTeam] = setupNextPlayer(state.teams[state.activeTeam])
                state.activeTeam = switchTeamKey(state.activeTeam)
                state.round = nextRound(state)
            })
            .addCase(skipWord, (state) => {
                state = setupNextWord(state)
                state.round = nextRound(state)
            })
            .addCase(winRound, (state) => {
                if (!state.round) throw Error('Round not initialized');
                const activeTeam = state.teams[state.activeTeam];
                activeTeam.score += 1;
                state.teams[state.activeTeam] = setupNextPlayer(activeTeam)

                if (activeTeam.score >= state.winningScore) {
                    state.winner = state.teams[state.activeTeam];
                }
                state = setupNextWord(state)
                state.round = nextRound(state)
            })
            .addCase(resetScores, (state) => {
                state.winner = null
                state.teams = reduce(state.teams, (teams: Record<any, InGameTeam>, team: InGameTeam, team_key) => {
                    return {
                        ...teams,
                        [team_key]: {
                            ...team,
                            members: shuffle(team.members),
                            score: 0,
                            currentPlayerPosition: 0
                        }
                    }
                }, {}) as Record<TEAM, InGameTeam>
                state.activeTeam = randomTeamKey()
                state.words = _shuffle(allWords)
                state = setupNextWord(state)
                state.round = nextRound(state)
            })
            .addCase(resetAll, () => initialState)
    }
)