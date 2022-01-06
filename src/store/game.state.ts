import {createAction, createReducer} from "@reduxjs/toolkit";
import {TEAM} from "../app.declarations";

export interface InGameTeam {
    key: TEAM
    members: string[]
    score: number
}

export interface GameState {
    activeTeam: TEAM | null,
    teams: Record<TEAM, InGameTeam>
    winner: TEAM | null;
    winningScore: number;
    maxRounds: number;
}

const initialState: GameState = {
    activeTeam: null,
    teams: {
        [TEAM.OTTER]: {key: TEAM.OTTER, members: [], score: 0},
        [TEAM.PANDA]: {key: TEAM.PANDA, members: [], score: 0}
    },
    winner: null,
    winningScore: 15,
    maxRounds: 20
}

export const changeActiveTeam = createAction<TEAM>('game/changeActiveTeam');
export const setupTeams = createAction<Record<TEAM, string[]>>('game/setupTeams');
export const incrementTeamScore = createAction<TEAM>('game/incrementTeamScore');

export const GameActions = {
    changeActiveTeam,
    setupTeams,
    incrementTeamScore
}

export const GameReducer = createReducer<GameState>(initialState, (builder) => {
    builder
        .addCase(changeActiveTeam, (state, {payload: activeTeam}) => {
            state.activeTeam = activeTeam
        })
        .addCase(setupTeams, (state, {payload: teams}) => {
            (Object.keys(teams) as TEAM[]).forEach((key: TEAM) => {
                state.teams[key].members = teams[key]
            });
        })
})