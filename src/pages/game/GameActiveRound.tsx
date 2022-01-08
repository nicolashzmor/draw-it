import React from 'react';
import {InGameRound} from "../../app.declarations";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../store/store";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import styles from "./GameNextPlayer.module.scss";
import Button from "../../components/Shared/Button";
import TeamLabel from "../../components/Team/TeamLabel";
import GameCard from "../../components/Game/GameCard";
import {useSecondsTimer} from "../../components/Game/SecondsTimer.hook";
import {useNavigate} from "react-router-dom";
import {GameActions} from "../../store/game.state";
import {useGameReady} from "../../components/Game/GameReady.hook";


const GameActiveRound = () => {

    useGameReady()

    const navigate = useNavigate()
    const dispatcher = useDispatch()
    const timePerRound = useSelector<AppStore, number>(({game}) => game.timePerRound)
    const timer = useSecondsTimer(timePerRound, () => {
        dispatcher(GameActions.loseRound())
        navigate('/game/timeout')
    })

    const round: InGameRound = useSelector<AppStore, InGameRound>(({game}) => {
        if (!game.round) {
            return {} as any;
        }
        return game.round;
    });

    const handleGuessedWord = () => {
        dispatcher(GameActions.winRound())
        navigate('/game/next-player')
    }

    return (
        <PageFullHeightCentered
            className={styles.gameNextPlayer}
            customStyles={{background: `var(--${round.activeTeam.slug}-gradient)`}}
        >
            <>
                <header className={styles.gameNextPlayer__header}>
                    <TeamLabel icon={round.activeTeam.icon} label={round.currentPlayer}/>

                    <span className={styles.gameNextPlayer__timer}>{timer.remaining}</span>
                </header>
                <GameCard word={round.word}/>
                <Button onClick={handleGuessedWord} mode="primary">¡Adivinado!</Button>
            </>
        </PageFullHeightCentered>
    );
};

export default GameActiveRound;
