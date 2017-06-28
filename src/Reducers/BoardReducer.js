import _ from 'lodash';
import * as BoardUtils from 'Utils/BoardUtils';
import * as ActionTypes from 'Constants/ActionTypes';
import getInitialState from 'Reducers/InitialStates/BoardInitialState';

// return {
//         type: ActionTypes.BOARD_UPDATE_TILES,
//         payload: {
//             tiles,
//             claimedSquares,
//             switchPlayerControl
//         }
//     };
let statePatch;
export default function(state = getInitialState(), action) {
    switch (action.type) {
        case (ActionTypes.BOARD_UPDATE_TILES):
            return (() => {
                const statePatch = _.cloneDeep(state);

                const {
                    tiles, claimedSquares, switchPlayerControl
                } = action.payload;

                statePatch.tiles = _.cloneDeep(tiles);
                statePatch.claimedSquares = _.cloneDeep(claimedSquares);

                if (switchPlayerControl) {
                    statePatch.currentPlayer = (statePatch.currentPlayer === 1) ? 2 : 1;
                }

                return statePatch;
            })();

        case (ActionTypes.RESTART_GAME):
            return (() => {
                const {columnCount, rowCount} = action.nextGameSettings;

                const tiles = BoardUtils.getFreshGameBoard(columnCount, rowCount);
                const claimedSquares = BoardUtils.getInitialClaimedSquares(columnCount, rowCount);

                return {
                    ...getInitialState(),
                    tiles,
                    claimedSquares
                };
            })()
            

        default:
            return state;
    }
};