import styles from './TeamIcon.module.scss';
import React from 'react';
import '../../assets/SVG/otter.svg'

const TeamIcon = ({icon, name, size}: {icon: string, name: string, size?: 'large' | 'medium' | 'small'}) => {
    return (
        <div className={[styles['draw-it-teams-icon'], styles[`draw-it-team-icon--${size || 'medium'}`]].join(' ')}>
            <img src={icon} alt={name}/>
        </div>
    );
};

export default TeamIcon;
