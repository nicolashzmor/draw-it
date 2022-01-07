import React from 'react';
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import TimeoutImage from "../../assets/background-timeout.png";
import ImageWithCenteredCaption from "../../components/Shared/ImageWithCenteredCaption";
import Button from "../../components/Shared/Button";

const GameTimeout = () => {
    return (
        <PageFullHeightCentered
            customStyles={{background: `var(--accent-2-gradient)`}}
        >
            <ImageWithCenteredCaption background={TimeoutImage}/>
            <h1>¡Se acabo el tiempo!</h1>
            <Button mode="primary">Proxima ronda</Button>
        </PageFullHeightCentered>
    );
};

export default GameTimeout;
