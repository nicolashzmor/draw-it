import styles from './TeamMembersForm.module.scss';
import React, {Dispatch, useRef} from 'react';
import {TextField} from "@mui/material";

interface TeamMembersFormProps {
    members: string[]
    onMembersChange: Dispatch<string[]>
    background?: string;
}

const TeamMembersForm = ({background, members, onMembersChange: setMembers}: TeamMembersFormProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const addMember = (member: string, target: EventTarget) => {
        if (member === '') return;
        setMembers([...members, member]);
        const input: HTMLInputElement = (target as HTMLInputElement);
        input.value = '';
        input.focus()
    }

    const updateMember = (index: number, member: string) => {
        const draft = [...members];
        if (member === '') {
            draft.splice(index, 1);
        } else {
            draft[index] = member
        }
        setMembers(draft);
    }

    const onEnter = (callback: (event: React.KeyboardEvent<HTMLInputElement>) => any) => {
        return (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                callback(event);
            }
        }
    }

    return (
        <div className={styles.drawItTeamForm} style={{background: background}}>
            {members.map((member, index) =>
                <div className={styles.drawItTeamForm__field_container}>
                    <span>{index + 1} - </span>
                    <TextField
                        className={styles.drawItTeamForm__field}
                        key={index}
                        value={member}
                        label="Nombre"
                        variant="standard"
                        onChange={({target}) => updateMember(index, target.value)}
                    />
                </div>)
            }
            <div className={styles.drawItTeamForm__field_container}>
                <span>{ members.length + 1} -</span>
                <TextField
                    className={styles.drawItTeamForm__field}
                    ref={inputRef}
                    label="Nombre"
                    variant="standard"
                    onBlur={(event) => addMember(event.target.value, event.target)}
                    onKeyPress={onEnter((event) => event.target && addMember((event.target as any).value, event.target))}
                />
            </div>
        </div>
    );
};

export default TeamMembersForm;
