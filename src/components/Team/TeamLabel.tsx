import styles from './TeamLabel.module.scss';
import React from 'react';
import TeamIcon from "./TeamIcon";

const TeamLabel = ({icon, label, className}: { icon: string, label: string, className?: string }) => {
    return (
        <div className={[styles.teamBuilderLabel, className || ''].join(' ')}>
            <TeamIcon icon={icon} name={label}/>
            <h1>{label}</h1>
        </div>
    );
};

export default TeamLabel;
