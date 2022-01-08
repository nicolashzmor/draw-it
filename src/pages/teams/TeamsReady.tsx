import React from 'react';
import styles from './TeamsReady.module.scss';
import {AppStore} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import TeamLabel from "../../components/Team/TeamLabel";
import {TeamValues} from "../../app.values";
import Button from "../../components/Shared/Button";
import TeamGrid from "../../components/Team/TeamGrid";
import {useNavigate} from "react-router-dom";
import {InGameTeam} from "../../app.declarations";
import {GameActions} from "../../store/game.state";

const TeamReady = () => {
    const navigate = useNavigate()
    const dispatcher = useDispatch()

    const Teams = useSelector<AppStore, InGameTeam[]>(({game}) => Object.values(game.teams))
    const TeamA = Teams[0];
    const TeamB = Teams[1];

    const TeamAValues = TeamValues.find(v => v.key === Teams[0].key)
    const TeamBValues = TeamValues.find(v => v.key === Teams[1].key)

    const initGame = () => {
        dispatcher(GameActions.initGame())
        navigate('/game/next-player')
    }

    return (
        <PageFullHeightCentered className={styles.drawItTeamsReady}>
            <>
                <TeamLabel
                    className={styles.drawItTeamsReady__team_label}
                    icon={TeamAValues?.icon || ''}
                    label={`Team ${TeamAValues?.name || ''}`}
                />
                <TeamGrid
                    members={TeamA.members}
                    color={TeamAValues?.mainColor}
                />
                <div className={styles.drawItTeamsReady__divider}>
                    <Button onClick={initGame} mode={'primary'}>¡Jugar!</Button>
                </div>
                <TeamLabel
                    className={styles.drawItTeamsReady__team_label}
                    icon={TeamBValues?.icon || ''}
                    label={`Team ${TeamBValues?.name || ''}`}
                />
                <TeamGrid
                    members={TeamB.members}
                    color={TeamBValues?.mainColor}
                />
            </>
        </PageFullHeightCentered>
    );
};

export default TeamReady;
