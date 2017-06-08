import _ from 'lodash';
import * as BoardUtils from 'Utils/BoardUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case ActionTypes.RESTART_GAME:
            const tiles = BoardUtils.getFreshGameBoard(
                action.nextGameSettings.columnCount,
                action.nextGameSettings.rowCount,
            );
            return {
                ...getInitialState(),
                tiles
            };

        case ActionTypes.BOARD_UPDATE_TILES:
            const newState = _.cloneDeep(state);
            
            newState.tiles = action.tiles;
            newState.claimedSquares = action.claimedSquares;

            if (action.switchPlayerControl) {
                newState.currentPlayer = (newState.currentPlayer === 1) ? 2 : 1;
            }

            newState.isWinnerFound = false; // TODO: Fix

            return newState;

        default:
            return state;
    }
};