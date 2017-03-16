import * as ActionTypes from 'Constants/ActionTypes';


export function RestartGame() {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.RESTART_GAME,
            nextGameSettings: getState().GameInfo.nextGame
        });
    };
}