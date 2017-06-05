import _ from 'lodash';
import * as ActionTypes from 'Constants/ActionTypes';
import * as BoardUtils from 'Utils/BoardUtils';


export function UpdateTiles(tiles, switchPlayerControl) {
    return {
        type: ActionTypes.BOARD_UPDATE_TILES,
        tiles,
        switchPlayerControl
    }
}

export function claimTile(columnIndex, rowIndex) {
    return (dispatch, getState) => {
        const boardState = _.cloneDeep(getState().Board);
        const gameInfoState = _.cloneDeep(getState().GameInfo).currentGame;

        const newTiles = _.cloneDeep(boardState.tiles);
        newTiles[columnIndex][rowIndex] = boardState.currentPlayer;
        
        console.log(BoardUtils.getClaimedSquares(gameInfoState.columnCount, gameInfoState.rowCount, newTiles));

        const shouldSwitchPlayerControl = true; // TODO: Fix

        dispatch(UpdateTiles(newTiles, shouldSwitchPlayerControl));
    };
}