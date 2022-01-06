import styles from './TeamLabel.module.scss';
import React from 'react';
import TeamIcon from "./TeamIcon";

const TeamLabel = ({icon, name, className}: { icon: string, name: string, className?: string }) => {
    return (
        <div className={[styles.teamBuilderLabel, className || ''].join(' ')}>
            <TeamIcon icon={icon} name={name}/>
            <h1>Team {name}</h1>
        </div>
    );
};

export default TeamLabel;
