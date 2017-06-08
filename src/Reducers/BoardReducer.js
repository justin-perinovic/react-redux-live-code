import _ from 'lodash';
import * as BoardUtils from 'Utils/BoardUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';


let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case ActionTypes.RESTART_GAME:
            const {columnCount, rowCount} = action.nextGameSettings;

            const tiles = BoardUtils.getFreshGameBoard(
                columnCount,
                rowCount,
            );

            const claimedSquares = BoardUtils.getInitialClaimedSquares(
                columnCount,
                rowCount
            );

            return {
                ...getInitialState(),
                tiles,
                claimedSquares
            };

        case ActionTypes.BOARD_UPDATE_TILES:
            const newState = _.cloneDeep(state);
            
            newState.tiles = action.tiles;
            newState.claimedSquares = action.claimedSquares;

            if (action.switchPlayerControl) {
                newState.currentPlayer = (newState.currentPlayer === 1) ? 2 : 1;
            }

            return newState;

        default:
            return state;
    }
};