import {createAction, createReducer} from "@reduxjs/toolkit";
import {ITeamConfig, TEAM} from "../app.declarations";
import {TeamsValuesMap} from "../app.values";

export interface InGameTeam extends ITeamConfig {
    members: string[]
    score: number
    lastPlayer: number
}

export interface GameState {
    activeTeam: TEAM | null
    teams: Record<TEAM, InGameTeam>
    winner: TEAM | null;
    winningScore: number;
    maxRounds: number;
}

const initialState: GameState = {
    activeTeam: null,
    teams: {
        [TEAM.OTTER]: {...TeamsValuesMap[TEAM.OTTER], members: [], score: 0, lastPlayer: 0},
        [TEAM.PANDA]: {...TeamsValuesMap[TEAM.PANDA], members: [], score: 0, lastPlayer: 0}
    },
    winner: null,
    winningScore: 15,
    maxRounds: 20
}
// GAME SETUP
export const changeActiveTeam = createAction<TEAM>('game/changeActiveTeam')
export const setupTeams = createAction<Record<TEAM, string[]>>('game/setupTeams')

// IN GAME
export const initGame = createAction<void>('game/initGame')
export const incrementTeamScore = createAction<void>('game/incrementTeamScore')
export const switchTeam = createAction<void>('game/switchTeam')

export const GameActions = {
    changeActiveTeam,
    setupTeams,
    // IN GAME
    initGame,
    incrementTeamScore,
    switchTeam
}

export const GameReducer = createReducer<GameState>(initialState, (builder) => builder
    .addCase(changeActiveTeam, (state, {payload: activeTeam}) => {
        state.activeTeam = activeTeam
    })
    .addCase(setupTeams, (state, {payload: teams}) => {
        (Object.keys(teams) as TEAM[]).forEach((key: TEAM) => {
            state.teams[key].members = teams[key]
        });
    })
)