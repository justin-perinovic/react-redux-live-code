import getGameInfoInitialState from 'Reducers/InitialStates/GameInfoInitialState';
import * as GameUtils from 'Utils/GameUtils';


export default function getInitialState() {
    const gameInfo = getGameInfoInitialState();

    const tiles = GameUtils.getFreshGameBoard(gameInfo.currentGame.columnCount, gameInfo.currentGame.rowCount);

    return {
        tiles: tiles,
        currentPlayer: 1,
        isGameComplete: false,
        victoryTiles: {}
    }
};