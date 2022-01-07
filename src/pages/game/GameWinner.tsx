import React from 'react';
import styles from "./GameWinner.module.scss";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import {TeamsValuesMap} from "../../app.values";
import {TEAM} from "../../app.declarations";
import Button from "../../components/Shared/Button";
import WinnerImage from "../../assets/SVG/otter-winner.svg";
import ImageWithCenteredCaption from "../../components/Shared/ImageWithCenteredCaption";

const GameWinner = () => {
    const Winner = TeamsValuesMap[TEAM.OTTER]
    return (
        <PageFullHeightCentered
            className={styles.GameWinner}
            customStyles={{background: `var(--accent-gradient)`}}
        >
            <>
                <ImageWithCenteredCaption background={WinnerImage}/>
                <h1>¡El equipo {Winner.name} ha ganado!</h1>
                <footer className={styles.GameWinner__footer}>
                    <Button mode="success">¡Revancha!</Button>
                    <Button mode="neutral">Rearmar equipos</Button>
                </footer>
            </>
        </PageFullHeightCentered>
    );
};

export default GameWinner;
