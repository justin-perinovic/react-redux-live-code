import * as ActionTypes from 'Constants/ActionTypes';


export function UpdatePlayerName(playerNumber, playerName) {
    return {
        type: ActionTypes.GAME_INFO_UPDATE_PLAYER_NAME,
        playerNumber,
        playerName
    };
};

export function UpdateColumnCount(columnCount) {
    return {
        type: ActionTypes.GAME_INFO_UPDATE_COLUMN_COUNT,
        columnCount: parseInt(columnCount, 10)
    };
};

export function UpdateRowCount(rowCount) {
    return {
        type: ActionTypes.GAME_INFO_UPDATE_ROW_COUNT,
        rowCount
    };
};