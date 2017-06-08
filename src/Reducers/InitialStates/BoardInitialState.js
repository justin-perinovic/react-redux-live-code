import _ from 'lodash';
import getGameInfoInitialState from 'Reducers/InitialStates/GameInfoInitialState';
import * as BoardUtils from 'Utils/BoardUtils';


export default function getInitialState() {
    const gameInfo = getGameInfoInitialState();

    const columnCount = gameInfo.currentGame.columnCount;
    const rowCount = gameInfo.currentGame.rowCount;

    const tiles = BoardUtils.getFreshGameBoard(columnCount, rowCount);
    const claimedSquares = BoardUtils.getInitialClaimedSquares(columnCount, rowCount);

    return {
        tiles,
        claimedSquares,
        currentPlayer: 1
    }
};