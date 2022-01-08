import {ITeamConfig, TEAM} from "./app.declarations";
import PandaIcon from './assets/SVG/panda.svg';
import PandaWinningIcon from './assets/SVG/panda-winner.svg'
import OtterIcon from './assets/SVG/otter.svg';
import OtterWinningIcon from './assets/SVG/otter-winner.svg'

export const TeamsValuesMap: Record<TEAM, ITeamConfig> = {
    [TEAM.OTTER]: {
        key: TEAM.OTTER,
        name: 'Otter',
        slug: 'otter',
        mainColor: '#E5D0FA',
        icon: OtterIcon,
        winningIcon: OtterWinningIcon
    },
    [TEAM.PANDA]: {
        key: TEAM.PANDA,
        name: 'Panda',
        slug: 'panda',
        mainColor: '#9AC1C1',
        icon: PandaIcon,
        winningIcon: PandaWinningIcon
    }
}

export const TeamValues: ITeamConfig[] = [
    TeamsValuesMap[TEAM.OTTER],
    TeamsValuesMap[TEAM.PANDA]
]

