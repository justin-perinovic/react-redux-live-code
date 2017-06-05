import getGameInfoInitialState from 'Reducers/InitialStates/GameInfoInitialState';
import * as BoardUtils from 'Utils/BoardUtils';


export default function getInitialState() {
    const gameInfo = getGameInfoInitialState();

    const tiles = BoardUtils.getFreshGameBoard(gameInfo.currentGame.columnCount, gameInfo.currentGame.rowCount);

    return {
        tiles: tiles,
        currentPlayer: 1,
        isWinnerFound: false
    }
};