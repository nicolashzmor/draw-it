import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import TeamCreationModeSelection from "./pages/teams/TeamCreationModeSelection";
import TeamManualCreation from "./pages/teams/TeamManualCreation";
import TeamRandomCreation from "./pages/teams/TeamRandomCreation";
import TeamReady from "./pages/teams/TeamsReady";
import GameNextPlayer from "./pages/game/GameNextPlayer";
import GameActiveRound from "./pages/game/GameActiveRound";
import {useGameReady} from "./components/Game/GameReady.hook";
import GameWinner from "./pages/game/GameWinner";
import GameTimeout from "./pages/game/GameTimeout";
import NotFound from "./pages/NotFound";

function App() {
    const gameReady = useGameReady()
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/teams/mode-selection" element={<TeamCreationModeSelection/>}/>
                <Route path="/teams/manual" element={<TeamManualCreation/>}/>
                <Route path="/teams/random" element={<TeamRandomCreation/>}/>
                {gameReady ? (
                    <>
                        <Route path="/teams/ready" element={<TeamReady/>}/>
                        <Route path="/game/next-player" element={<GameNextPlayer/>}/>
                        <Route path="/game/round" element={<GameActiveRound/>}/>
                        <Route path="/game/timeout" element={<GameTimeout/>}/>
                        <Route path="/game/winner" element={<GameWinner/>}/>
                    </>
                ) : (
                    <></>
                )}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
