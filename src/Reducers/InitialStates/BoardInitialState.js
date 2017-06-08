import _ from 'lodash';
import getGameInfoInitialState from 'Reducers/InitialStates/GameInfoInitialState';
import * as BoardUtils from 'Utils/BoardUtils';


export default function getInitialState() {
    const gameInfo = getGameInfoInitialState();

    const columnCount = gameInfo.nextGame.columnCount;
    const rowCount = gameInfo.nextGame.rowCount;

    const tiles = BoardUtils.getFreshGameBoard(columnCount, rowCount);

    const claimedSquares = {};
    for (let colI = 0; colI < columnCount; colI++) {
        claimedSquares[colI] = {};
        for (let rowI = 0; rowI < rowCount; rowI++) {
            claimedSquares[colI][rowI] = 0;
        }
    }
console.log('claimedSquares', claimedSquares)
    return {
        tiles,
        claimedSquares,
        currentPlayer: 1
    }
};