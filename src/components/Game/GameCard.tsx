import React from 'react';
import styles from './GameCard.module.scss';

const GameCard = ({word}: { word: string }) => {
    return (
        <section className={styles.GameCard}>
            <h1 className={styles.GameCard__word}>{word}</h1>
        </section>
    );
};

export default GameCard;
