import React, {useEffect} from 'react';
import styles from './GameNextPlayer.module.scss'
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import TeamIcon from "../../components/Team/TeamIcon";
import Button from "../../components/Shared/Button";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStore} from "../../store/store";
import {InGameRound, InGameTeam} from "../../app.declarations";

const GameNextPlayer = () => {
    const navigate = useNavigate()
    const winner = useSelector<AppStore, InGameTeam | null>(({game}) => game.winner)

    const round: InGameRound = useSelector<AppStore, InGameRound>(({game}) => {
        if (!game.round) throw Error('Cannot initialize the game without a round')
        return game.round
    });

    useEffect(() => {
        if (winner) navigate('/game/winner')
    }, [navigate, winner]);


    return (
        <PageFullHeightCentered
            className={styles.gameNextPlayer}
            customStyles={{background: `var(--${round.activeTeam.slug}-gradient)`}}
        >
            <>
                <TeamIcon icon={round.activeTeam.icon} name={round.currentPlayer} size="jumbo"/>
                <small>Puntaje: { round.activeTeam.score } pts</small>
                <h2>Dibuja</h2>
                <h1 className={styles.gameNextPlayer__player_name}>{round.currentPlayer}</h1>
                <Link to="/game/round">
                    <Button mode="primary">Iniciar turno</Button>
                </Link>
            </>
        </PageFullHeightCentered>
    );
};

export default GameNextPlayer;
