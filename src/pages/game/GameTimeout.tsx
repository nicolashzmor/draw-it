import React from 'react';
import PageFullHeightCentered from "../../components/Layout/Pages/PageFullHeightCentered";
import TimeoutImage from "../../assets/background-timeout.png";
import ImageWithCenteredCaption from "../../components/Shared/ImageWithCenteredCaption";
import Button from "../../components/Shared/Button";
import {Link} from "react-router-dom";

const GameTimeout = () => {
    return (
        <PageFullHeightCentered
            customStyles={{background: `var(--accent-2-gradient)`}}
        >
            <ImageWithCenteredCaption background={TimeoutImage}/>
            <h1>¡Se acabo el tiempo!</h1>
            <Link to={"/game/next-player"}><Button mode="primary">Proxima ronda</Button></Link>
        </PageFullHeightCentered>
    );
};

export default GameTimeout;
