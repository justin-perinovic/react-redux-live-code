import {combineReducers} from 'redux';
import GameInfoReducer from 'Reducers/GameInfoReducer';
import BoardReducer from 'Reducers/BoardReducer';

export default combineReducers({
    GameInfo: GameInfoReducer,
    Board: BoardReducer
});