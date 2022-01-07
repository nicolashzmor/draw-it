import React from 'react';
import Button from "../components/Shared/Button";
import HomeBackground from '../assets/home-background.jpg';
import {Link} from "react-router-dom";
import ImageWithCenteredCaption from "../components/Shared/ImageWithCenteredCaption";
import PageFullHeightCentered from "../components/Layout/Pages/PageFullHeightCentered";

function Home() {

    return (
        <PageFullHeightCentered className={"draw-it-home"}>
            <>
                <ImageWithCenteredCaption background={HomeBackground}>
                    <h1>Draw it!</h1>
                </ImageWithCenteredCaption>
                <Link to="/teams/mode-selection"><Button>Empezar Partida</Button></Link>
            </>
        </PageFullHeightCentered>
    );
}

export default Home;