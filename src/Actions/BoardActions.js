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
        const gameInfoState = _.cloneDeep(getState().GameInfo);
        const boardState = _.cloneDeep(getState().Board);

        const playerNumber = boardState.currentPlayer;
        const newTiles = _.cloneDeep(boardState.tiles);

        if (GameUtils.isColumnFull(newTiles[columnNumber])) {
            throw new Error('Tried to add to full column');
        }
        
        const columnDepth = Object.keys(newTiles[columnNumber]).length;
        let tileVector;
        for (let rowNumber = 0; rowNumber < columnDepth; rowNumber++) {
            if (newTiles[columnNumber][rowNumber] !== 0) {
                tileVector = {x: columnNumber, y: rowNumber-1}
                newTiles[columnNumber][rowNumber-1] = playerNumber;
                break;
            }
        }
        if (!tileVector) {
            const rowNumber = (columnDepth - 1);
            tileVector = {x: columnNumber, y: rowNumber};
            newTiles[columnNumber][rowNumber] = playerNumber;
        }

        const victoryRequirement = 2; // TODO: Remove
        const victoryTiles = GameUtils.getVictoryTiles(victoryRequirement, playerNumber, tileVector.x, tileVector.y, newTiles)        
        const shouldSwitchPlayerControl = (Object.keys(victoryTiles).length === 0);

        dispatch(UpdateTiles(newTiles, victoryTiles, shouldSwitchPlayerControl));
    }
}