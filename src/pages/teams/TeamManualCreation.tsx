import React, {useState} from 'react';
import TeamBuilderHeader from "../../components/Team/TeamBuilderHeader";
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import Button from "../../components/Shared/Button";
import TeamMembersForm from "../../components/Team/TeamMembersForm";
import {TEAM} from "../../app.declarations";
import {useDispatch} from "react-redux";
import {GameActions} from "../../store/game.state";
import _cloneDeep from "lodash/cloneDeep";
import {TeamValues} from "../../app.values";
import {useNavigate} from "react-router-dom";

interface Teams {
    [TEAM.OTTER]: string[];
    [TEAM.PANDA]: string[];
}

const TeamManualCreation = () => {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const [teams, updateTeams] = useState<Teams>({[TEAM.OTTER]: [], [TEAM.PANDA]: []});
    const [activeEditingTeam, setActiveEditingTeam] = useState(TEAM.OTTER);

    const updateTeam = (members: string[]) => {
        const teamsDraft = _cloneDeep(teams)
        teamsDraft[activeEditingTeam] = members
        updateTeams(teamsDraft)
    }

    const SetupTeamsAndNavigate = () => {
        dispatcher(GameActions.setupTeams(teams))
        navigate('/teams/ready')
    }

    return (
        <PageFullHeightCentered className={"draw-it-teams-manual-creation"}>
            <>
                <TeamBuilderHeader activeTeam={activeEditingTeam} onSwitchTeam={setActiveEditingTeam}/>
                <TeamMembersForm
                    background={TeamValues.find(d => d.key === activeEditingTeam)?.mainColor}
                    members={teams[activeEditingTeam]}
                    onMembersChange={updateTeam}
                />
                <Button onClick={SetupTeamsAndNavigate}>Ya están todos los jugadores</Button>
            </>
        </PageFullHeightCentered>
    );
};

export default TeamManualCreation;
