import styles from './TeamBuilderHeader.module.scss';
import React from 'react';
import TeamLabel from "./TeamLabel";
import TeamIcon from "./TeamIcon";
import {RiSwapLine} from "react-icons/ri";
import {ITeamConfig, TEAM} from "../../app.declarations";
import {noop} from "lodash";
import {TeamValues} from "../../app.values";

interface TeamBuilderHeaderProps {
    activeTeam: TEAM;
    onSwitchTeam?: (team: TEAM) => void
}

const TeamBuilderHeader = ({activeTeam, onSwitchTeam}: TeamBuilderHeaderProps) => {
    const getActiveTeamData = () => TeamValues.find(d => d.key === activeTeam) as ITeamConfig;
    const getInactiveTeamData = () => TeamValues.find(d => d.key !== activeTeam) as ITeamConfig;

    return (
        <>
            <div className={styles.teamBuilderHeader}>
                <TeamLabel icon={getActiveTeamData().icon} name={getActiveTeamData().name}/>
                <RiSwapLine onClick={() => (onSwitchTeam || (noop))(getInactiveTeamData().key)} size={24}
                            style={{transform: 'rotate(90deg)'}}/>
                <TeamIcon size={'small'} icon={getInactiveTeamData().icon} name={getInactiveTeamData().name}/>
            </div>
        </>
    );
};

export default TeamBuilderHeader;
