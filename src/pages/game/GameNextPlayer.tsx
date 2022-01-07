import React from 'react';
import styles from './GameNextPlayer.module.scss'
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import TeamIcon from "../../components/Team/TeamIcon";
import {TeamsValuesMap} from "../../app.values";
import Button from "../../components/Shared/Button";
import {ITeamConfig, TEAM} from "../../app.declarations";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStore} from "../../store/store";

const GameNextPlayer = () => {
    const activeTeam: ITeamConfig = useSelector<AppStore, ITeamConfig>(({game}) => {
        return TeamsValuesMap[TEAM.PANDA]
    });
    const name = 'Nico'
    return (
        <PageFullHeightCentered
            className={styles.gameNextPlayer}
            customStyles={{background: `var(--${activeTeam.slug}-gradient)`}}
        >
            <>
                <TeamIcon icon={activeTeam.icon} name={activeTeam.name} size="jumbo"/>
                <h2>Dibuja</h2>
                <h1 className={styles.gameNextPlayer__player_name}>{name}</h1>
                <Link to="/game/round">
                    <Button mode="primary">Iniciar turno</Button>
                </Link>
            </>
        </PageFullHeightCentered>
    );
};

export default GameNextPlayer;
