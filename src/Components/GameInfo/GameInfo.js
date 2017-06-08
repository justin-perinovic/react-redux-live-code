import _ from 'lodash';
import React from 'react';

import * as BoardUtils from 'Utils/BoardUtils';

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

    if (
        BoardUtils.isBoardFull(
            props.currentGameInfo.columnCount,
            props.currentGameInfo.rowCount,
            props.tiles
        )
    ) {
        const scores = {
            1: 0,
            2: 0
        };
        _.forEach(props.claimedSquares, (claimedSquares, claimedSquareX) => {
            _.forEach(claimedSquares, (playerNumber) => {
                if (playerNumber) {
                    scores[playerNumber] += 1;
                }
            });
        });

        const winner = (() => {
            if (scores[1] > scores[2]) {
                return 1;
            } else if (scores[2] > scores[1]) {
                return 2;
            }
            return null;
        })();
        if (winner) {
            currentPlayerText = (
                <VictoryText
                    playerName={props.currentPlayersData[winner].name}
                    playerNumber={winner}
                />
            );
        } else {
            victoryText = (
                <NoVictoryText />
            );
        }
    } else {
        currentPlayerText = (
            <CurrentPlayerText playerName={props.currentPlayersData[props.currentPlayer].name} playerNumber={props.currentPlayer} />
        );
    }

    return (
        <div className="gameRegion gameInfo">
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(1, e.target.value)}} playerNumber={1} playerName={props.nextGameInfo.players[1].name} />
            <PlayerNameInput onChange={(e) => {props.updatePlayerName(2, e.target.value)}} playerNumber={2} playerName={props.nextGameInfo.players[2].name} />
            <ColumnCountInput onChange={(e) => {props.updateColumnCount(e.target.value)}} currentCount={props.nextGameInfo.columnCount} />
            <RowCountInput onChange={(e) => {props.updateRowCount(e.target.value)}} currentCount={props.nextGameInfo.rowCount} />
            <RestartButton onClick={props.restartGame} />
            {currentPlayerText}
            {victoryText}
        </div>
    );
}