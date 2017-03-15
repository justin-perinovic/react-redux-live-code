import {combineReducers} from 'redux';
import GameInfoReducer from 'Reducers/GameInfoReducer';

export default combineReducers({
    GameInfo: GameInfoReducer
});