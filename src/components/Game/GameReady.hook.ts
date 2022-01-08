import {useSelector} from "react-redux";
import {AppStore} from "../../store/store";

export const useGameReady = () => useSelector<AppStore, boolean>(({game}) => game.configured)