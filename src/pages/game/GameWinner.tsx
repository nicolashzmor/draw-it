import React, {useEffect} from 'react';
import styles from "./GameWinner.module.scss";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import {InGameTeam} from "../../app.declarations";
import Button from "../../components/Shared/Button";
import ImageWithCenteredCaption from "../../components/Shared/ImageWithCenteredCaption";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../store/store";
import {useNavigate} from "react-router-dom";
import {GameActions} from "../../store/game.state";

const GameWinner = () => {
    const navigate = useNavigate()
    const dispatcher = useDispatch()
    const Winner = useSelector<AppStore, InGameTeam | null>(({game}) => {
        return game.winner
    })

    useEffect(() => {
        if (!Winner) navigate('/');
    }, [navigate, Winner]);

    if (!Winner) {
        return (<></>)
    }

    const handleRematch = () => {
        dispatcher(GameActions.resetScores())
        navigate('/game/next-player')
    }

    const handleSetupTeamsAgain = () => {
        dispatcher(GameActions.resetAll())
        navigate('/teams/mode-selection')
    }

    return (
        <PageFullHeightCentered
            className={styles.GameWinner}
            customStyles={{background: `var(--accent-gradient)`}}
        >
            <>
                <ImageWithCenteredCaption background={Winner.winningIcon}/>
                <h1>¡El equipo {Winner.name} ha ganado!</h1>
                <footer className={styles.GameWinner__footer}>
                    <Button onClick={handleRematch} mode="success">¡Revancha!</Button>
                    <Button onClick={handleSetupTeamsAgain} mode="neutral">Rearmar equipos</Button>
                </footer>
            </>
        </PageFullHeightCentered>
    );
};

export default GameWinner;
