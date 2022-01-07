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
}