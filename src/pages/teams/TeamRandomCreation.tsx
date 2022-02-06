import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import TeamMembersForm from "../../components/Team/TeamMembersForm";
import Button from "../../components/Shared/Button";
import {GameActions} from "../../store/game.state";
import {TEAM} from "../../app.declarations";
import _shuffle from "lodash/shuffle";
import _chunk from "lodash/chunk";
import {useDispatch} from "react-redux";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";

const TeamRandomCreation = () => {
    const navigate = useNavigate()
    const dispatcher = useDispatch()
    const [members, updateMembers] = useState<string[]>(['Nico', 'Kata', 'Sebas', 'Yann', 'Nacho'])

    const submitTeamsAndNavigate = () => {
        dispatcher(GameActions.setupTeams(getRandomTeams()))
        navigate('/teams/ready')
    }
    const getRandomTeams = () => {
        const shuffled = _shuffle(members);
        const chunks = _chunk(shuffled, Math.ceil(members.length / 2));
        console.log(chunks)
        return {
            [TEAM.PANDA]: chunks[0],
            [TEAM.OTTER]: chunks[1]
        }
    }

    return (
        <PageFullHeightCentered className={"draw-it-teams-manual-creation"}>
            <>
                <h1 style={{margin: '1.5em 0 0.75em', fontSize: '1.5em'}}>Agrega todos los jugadores</h1>
                <TeamMembersForm members={members} onMembersChange={updateMembers}/>
                <Button onClick={submitTeamsAndNavigate}>
                    Ya están todos los jugadores
                </Button>
            </>
        </PageFullHeightCentered>
    );
};

export default TeamRandomCreation;
