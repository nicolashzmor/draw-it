import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import TeamCreationModeSelection from "./pages/teams/TeamCreationModeSelection";
import TeamManualCreation from "./pages/teams/TeamManualCreation";
import TeamRandomCreation from "./pages/teams/TeamRandomCreation";
import TeamReady from "./pages/teams/TeamsReady";

function App() {
    return (
        <div className="App draw-it-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mode-selection" element={<TeamCreationModeSelection />} />
                <Route path="/teams/manual" element={<TeamManualCreation />} />
                <Route path="/teams/random" element={<TeamRandomCreation />} />
                <Route path="/teams/ready" element={<TeamReady />} />
            </Routes>
        </div>
    );
}

export default App;
