import _ from 'lodash';
import * as ActionTypes from 'Constants/ActionTypes';
import * as BoardUtils from 'Utils/BoardUtils';


export function UpdateTiles(tiles, claimedSquares, switchPlayerControl) {
    return {
        type: ActionTypes.BOARD_UPDATE_TILES,
        payload: {
            tiles,
            claimedSquares,
            switchPlayerControl
        }
    };
}

export function claimTile(columnIndex, rowIndex) {
    return (dispatch, getState) => {
        const boardState = _.cloneDeep(getState().Board);
        const gameInfoState = _.cloneDeep(getState().GameInfo).currentGame;

        const currentPlayer = boardState.currentPlayer;

        const oldTiles = boardState.tiles;
        const newTiles = _.cloneDeep(oldTiles);
        newTiles[columnIndex][rowIndex] = currentPlayer;
        
        const newlyClaimedSquares =  BoardUtils.getNewlyClaimedSquares(
            columnIndex, rowIndex, gameInfoState.columnCount, gameInfoState.rowCount, oldTiles, newTiles
        );

        const claimedSquares = _.cloneDeep(boardState.claimedSquares);
        _.forEach(newlyClaimedSquares, (columnClaims, newClaimX) => {
            Object.keys(columnClaims).forEach((newClaimY) => {
                claimedSquares[newClaimX][newClaimY] = currentPlayer;
            });
        });

        const shouldSwitchPlayerControl = !Boolean(Object.keys(newlyClaimedSquares).length);
        
        dispatch(UpdateTiles(newTiles, claimedSquares, shouldSwitchPlayerControl));
    };
}