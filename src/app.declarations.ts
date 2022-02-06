export enum TEAM {
    OTTER = 'OTTER',
    PANDA = 'PANDA'
}

export interface ITeamConfig {
    key: string;
    name: string;
    slug: string;
    mainColor: string;
    icon: string;
    winningIcon: string;
}

export interface InGameTeam extends ITeamConfig {
    members: string[]
    score: number
    currentPlayerPosition: number
}

export interface InGameRound {
    activeTeam: InGameTeam
    currentPlayer: string;
    word: string;
}

export interface GameState {
    activeTeam: TEAM
    teams: Record<TEAM, InGameTeam>
    round: InGameRound | null
    winner: InGameTeam | null
    winningScore: number
    words: string[]
    nextWord: string
    maxRounds: number
    timePerRound: number
    rounds: number
    configured: boolean
}