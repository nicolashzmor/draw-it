import {ITeamConfig, TEAM} from "./app.declarations";
import PandaIcon from './assets/SVG/panda.svg';
import OtterIcon from './assets/SVG/otter.svg';

export const TeamValues: ITeamConfig[] = [
    {
        key: TEAM.OTTER,
        name: 'Otter',
        mainColor: '#E5D0FA',
        icon: OtterIcon
    },
    {
        key: TEAM.PANDA,
        name: 'Panda',
        mainColor: '#9AC1C1',
        icon: PandaIcon
    }
]