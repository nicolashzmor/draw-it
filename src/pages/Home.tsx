import React from 'react';
import Button from "../components/Shared/Button";
import HomeBackground from '../assets/home-background.jpg';
import {Link} from "react-router-dom";
import TitleWithBackground from "../components/Shared/TitleWithBackground";
import PageFullHeightCentered from "../components/Layout/Pages/PageFullHeightCentered";

function Home() {

    return (
        <PageFullHeightCentered className={"draw-it-home"}>
            <>
                <TitleWithBackground background={HomeBackground}>
                    <h1>Draw it!</h1>
                </TitleWithBackground>
                <Link to="/teams/mode-selection"><Button>Empezar Partida</Button></Link>
            </>
        </PageFullHeightCentered>
    );
}

export default Home;