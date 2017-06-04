import React from 'react';

import * as GameUtils from 'Utils/GameUtils';

import PlayerNameInput from 'Components/GameInfo/PlayerNameInput';
import ColumnCountInput from 'Components/GameInfo/ColumnCountInput';
import RowCountInput from 'Components/GameInfo/RowCountInput';
import RestartButton from 'Components/GameInfo/RestartButton';
import VictoryText from 'Components/GameInfo/VictoryText';
import NoVictoryText from 'Components/GameInfo/NoVictoryText';
import CurrentPlayerText from 'Components/GameInfo/CurrentPlayerText';


export default function GameInfo(props) {
    let currentPlayerText = null;
    let victoryText = null;
    if (props.isWinnerFound) {
        victoryText = (
            <VictoryText playerName={props.currentPlayersData[props.currentPlayer].name} playerNumber={props.currentPlayer} />
        );
    } else if (GameUtils.isBoardFull(props.tiles)) {
        victoryText = (
            <NoVictoryText />
        );
    } else {
        currentPlayerText = (
            <CurrentPlayerText playerName={props.currentPlayersData[props.currentPlayer].name} playerNumber={props.currentPlayer} />
        );
    }

    return (
        <div className="gameRegion gameInfo">
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(1, e.target.value)}} playerNumber={1} playerName={props.gameInfo.players[1].name} />
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(2, e.target.value)}} playerNumber={2} playerName={props.gameInfo.players[2].name} />
            <ColumnCountInput onChange={(e) => {props.updateColumnCount(e.target.value)}} currentCount={props.gameInfo.columnCount} />
            <RowCountInput onChange={(e) => {props.updateRowCount(e.target.value)}} currentCount={props.gameInfo.rowCount} />
            <RestartButton onClick={props.restartGame} />
            {currentPlayerText}
            {victoryText}
        </div>
    );
}