import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {GameReducer, GameState} from "./game.state";

export interface AppStore {
    game: GameState
}

export default configureStore({
    reducer: {
        game: GameReducer
    },
    devTools: true,
    middleware: [thunk, logger]
});