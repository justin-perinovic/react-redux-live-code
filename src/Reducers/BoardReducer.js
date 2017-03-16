import _ from 'lodash';
import * as GameUtils from 'Utils/GameUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case (ActionTypes.RESTART_GAME):
            statePatch = getInitialState();
            statePatch.tiles = GameUtils.getFreshGameBoard(action.nextGameSettings.columnCount, action.nextGameSettings.rowCount);
            return statePatch;

        case (ActionTypes.BOARD_UPDATE_TILES):
            statePatch = _.cloneDeep(state);
            
            statePatch.tiles = action.tiles;
            if (action.switchPlayerControl) {
                statePatch.currentPlayer = (statePatch.currentPlayer === 1) ? 2 : 1;
            }
            
            statePatch.victoryTiles = action.victoryTiles;
            if (Object.keys(action.victoryTiles).length > 0) {
                statePatch.isGameComplete = true;
            }

            return statePatch;

        default:
            return state;
    }
};