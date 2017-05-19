import _ from 'lodash';
import * as GameUtils from 'Utils/GameUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case ActionTypes.RESTART_GAME:
            return {
                ...getInitialState(),
                tiles: GameUtils.getFreshGameBoard(
                    action.nextGameSettings.columnCount,
                    action.nextGameSettings.rowCount,
                )
            }

        case ActionTypes.BOARD_UPDATE_TILES:
            const newState = _.cloneDeep(state);
            newState.tiles = action.tiles;
            newState.victoryTiles = action.victoryTiles;

            if (action.switchPlayerControl) {
                newState.currentPlayer = (newState.currentPlayer === 1) ? 2 : 1;
            }

            if (!_.isEmpty(action.victoryTiles)) {
                newState.isWinnerFound = true;
            }

            return newState;

        default:
            return state;
    }
};