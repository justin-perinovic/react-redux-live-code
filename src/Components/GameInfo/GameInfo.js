import React from 'react';

import PlayerNameInput from 'Components/GameInfo/PlayerNameInput';
import ColumnCountInput from 'Components/GameInfo/ColumnCountInput';
import RowCountInput from 'Components/GameInfo/RowCountInput';
import NumberInARowInput from 'Components/GameInfo/NumberInARowInput';
import RestartButton from 'Components/GameInfo/RestartButton';
import VictoryText from 'Components/GameInfo/VictoryText';
import CurrentPlayerText from 'Components/GameInfo/CurrentPlayerText';


export default function GameInfo(props) {
    return (
        <div className="gameRegion gameInfo">
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(1, e.target.value)}} playerNumber={1} playerName={props.gameInfo.players[1].name} />
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(2, e.target.value)}} playerNumber={2} playerName={props.gameInfo.players[2].name} />
            <ColumnCountInput onChange={(e) => {props.updateColumnCount(e.target.value)}} currentCount={props.gameInfo.columnCount} />
            <RowCountInput onChange={(e) => {props.updateRowCount(e.target.value)}} currentCount={props.gameInfo.rowCount} />
            <NumberInARowInput onChange={(e) => {props.updateNumberInARowToWin(e.target.value)}} currentNumber={props.gameInfo.numberInARowToWin} />
            <RestartButton onClick={props.restartGame} />
            <CurrentPlayerText playerName={props.currentPlayersData[1].name} playerNumber={1} />
            <VictoryText playerName={props.currentPlayersData[2].name} playerNumber={2} />
        </div>
    );
}