import styles from './TeamCreationModeSelection.module.scss'
import React from 'react';
import Button from "../../components/Shared/Button";
import TeamSelectionModeSelectionBackground from '../../assets/team-creation-mode-selection-background.jpg';
import TitleWithBackground from "../../components/Shared/TitleWithBackground";
import {Link} from "react-router-dom";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";

const TeamCreationModeSelection = () => {
    return (
        <PageFullHeightCentered className={styles.drawItTeamCreationMode}>
            <>
                <TitleWithBackground styles={{color: 'rgba(0,0,0,0.6)', fontWeight: 600 }}
                                     background={TeamSelectionModeSelectionBackground}>
                    <h2>Arma los equipos</h2>
                </TitleWithBackground>
                <Link to="/teams/random"><Button>Aleatorio</Button></Link>
                <Link to="/teams/manual"><Button>Manual</Button></Link>
            </>
        </PageFullHeightCentered>
    );
};

export default TeamCreationModeSelection;
