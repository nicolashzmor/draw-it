import React from 'react';
import styles from './TeamsReady.module.scss';
import {AppStore} from "../../store/store";
import {useSelector} from "react-redux";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import {InGameTeam} from "../../store/game.state";
import TeamLabel from "../../components/Team/TeamLabel";
import {TeamValues} from "../../app.values";
import Button from "../../components/Shared/Button";
import TeamGrid from "../../components/Team/TeamGrid";

const TeamReady = () => {
    const Teams = useSelector<AppStore, InGameTeam[]>(({game}) => Object.values(game.teams))
    const TeamA = Teams[0];
    const TeamB = Teams[1];

    const TeamAValues = TeamValues.find(v => v.key === Teams[0].key)
    const TeamBValues = TeamValues.find(v => v.key === Teams[1].key)

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
                    <Button mode={'primary'}>¡Jugar!</Button>
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
