import {createAction, createReducer} from "@reduxjs/toolkit";
import {GameState, InGameRound, InGameTeam, TEAM} from "../app.declarations";
import {TeamsValuesMap} from "../app.values";
import {reduce, sample, shuffle} from "lodash";

function RandomTeamKey(): TEAM {
    return sample(Object.values(TEAM)) as TEAM
}

function SwitchTeamKey(team: TEAM): TEAM {
    return Object.values(TEAM).find(t => t !== team) as TEAM
}

function nextRound(state: GameState): InGameRound {
    const nextTeam = state.teams[state.activeTeam];
    return {
        activeTeam: nextTeam,
        word: `Word ${Math.floor(Math.random() * 1000)}`,
        currentPlayer: nextTeam.members[nextTeam.currentPlayerPosition] || 'No Player Selected'
    }
}

const initialState: GameState = {
    activeTeam: RandomTeamKey(),
    teams: {
        [TEAM.OTTER]: {...TeamsValuesMap[TEAM.OTTER], members: [], score: 0, currentPlayerPosition: 0},
        [TEAM.PANDA]: {...TeamsValuesMap[TEAM.PANDA], members: [], score: 0, currentPlayerPosition: 0}
    },
    round: null,
    winner: null,
    winningScore: 3,
    maxRounds: 20,
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
export const resetScores = createAction<void>('game/resetScores')

export const GameActions = {
    changeActiveTeam,
    setupTeams,
    // IN GAME
    initGame,
    loseRound,
    winRound,
    resetScores
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
                state.round = nextRound(state)
            })
            .addCase(loseRound, (state) => {
                state.activeTeam = SwitchTeamKey(state.activeTeam)
                state.round = nextRound(state)
            })
            .addCase(winRound, (state) => {
                if (!state.round) throw Error('Round not initialized');
                const activeTeam = state.teams[state.activeTeam];
                activeTeam.score += 1;
                activeTeam.currentPlayerPosition =
                    activeTeam.currentPlayerPosition >= activeTeam.members.length - 1
                        ? 0
                        : activeTeam.currentPlayerPosition + 1;

                if (activeTeam.score >= state.winningScore) {
                    state.winner = state.teams[state.activeTeam];
                }

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
                state.activeTeam = RandomTeamKey()
                state.round = nextRound(state)
            })
    }
)