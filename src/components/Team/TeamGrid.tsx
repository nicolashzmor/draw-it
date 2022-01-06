import React from 'react';
import styles from './TeamGrid.module.scss';
import ScrollArea from 'react-scrollbar';

interface TeamGridProps {
    members: string[]
    color?: string;
    direction?: 'START' | 'END'
}

const TeamGrid = ({members, color, direction}: TeamGridProps) => {
    const AlignDirection = direction === 'END' ? 'flex-end' : 'flex-start';
    return (
        <ScrollArea style={{width: '100%', height: '100%'}}>
            <section className={styles.TeamGrid}
                     style={{alignContent: AlignDirection}}>
                {
                    members.map((member, index) =>
                        <article key={index} style={{background: color}}>{member}</article>)
                }
            </section>
        </ScrollArea>
    );
};

export default TeamGrid;
