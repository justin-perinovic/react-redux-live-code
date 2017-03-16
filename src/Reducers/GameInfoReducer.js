import _ from 'lodash';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/GameInfoInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case (ActionTypes.GAME_INFO_UPDATE_PLAYER_NAME):
            statePatch = _.cloneDeep(state);
            statePatch.nextGame.players[action.playerNumber].name = action.playerName;
            return statePatch;

        case (ActionTypes.GAME_INFO_UPDATE_COLUMN_COUNT):
            statePatch = _.cloneDeep(state);
            statePatch.nextGame.columnCount = action.columnCount;
            return statePatch;

        case (ActionTypes.GAME_INFO_UPDATE_ROW_COUNT):
            statePatch = _.cloneDeep(state);
            statePatch.nextGame.rowCount = action.rowCount;
            return statePatch;

        case (ActionTypes.GAME_INFO_UPDATE_NUMBER_IN_A_ROW):
            statePatch = _.cloneDeep(state);
            statePatch.nextGame.numberInARowToWin = action.numberInARowToWin;
            return statePatch;

        case (ActionTypes.RESTART_GAME):
            statePatch = _.cloneDeep(state);
            statePatch.currentGame = _.cloneDeep(action.nextGameSettings);
            return statePatch;

        default:
            return state;
    }
};