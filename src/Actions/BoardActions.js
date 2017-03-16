import _ from 'lodash';
import * as ActionTypes from 'Constants/ActionTypes';
import * as GameUtils from 'Utils/GameUtils';


export function UpdateTiles(tiles, victoryTiles, switchPlayerControl) {
    return {
        type: ActionTypes.BOARD_UPDATE_TILES,
        tiles,
        victoryTiles,
        switchPlayerControl
    }
}

export function AddToColumn(columnNumber) {
    return (dispatch, getState) => {
    }
}