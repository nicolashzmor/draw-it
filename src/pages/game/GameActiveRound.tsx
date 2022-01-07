import React from 'react';
import {ITeamConfig, TEAM} from "../../app.declarations";
import {useSelector} from "react-redux";
import {AppStore} from "../../store/store";
import {TeamsValuesMap} from "../../app.values";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import styles from "./GameNextPlayer.module.scss";
import Button from "../../components/Shared/Button";
import TeamLabel from "../../components/Team/TeamLabel";
import GameCard from "../../components/Game/GameCard";


const GameActiveRound = () => {
    const activeTeam: ITeamConfig = useSelector<AppStore, ITeamConfig>(({game}) => {
        return TeamsValuesMap[TEAM.PANDA]
    });
    const activePlayer = 'Nico';
    const remainingTime = 60;
    return (
        <PageFullHeightCentered
            className={styles.gameNextPlayer}
            customStyles={{background: `var(--${activeTeam.slug}-gradient)`}}
        >
            <>
                <header className={styles.gameNextPlayer__header}>
                    <TeamLabel icon={activeTeam.icon} label={activePlayer}/>

                    <span className={styles.gameNextPlayer__timer}>{remainingTime}</span>
                </header>
                <GameCard word={"Conectar"}/>
                <Button mode="primary">¡Adivinado!</Button>
            </>
        </PageFullHeightCentered>
    );
};

export default GameActiveRound;
