import React from 'react';

import PlayerNameInput from 'Components/GameInfo/PlayerNameInput';
import RestartButton from 'Components/GameInfo/RestartButton';
import VictoryText from 'Components/GameInfo/VictoryText';
import CurrentPlayerText from 'Components/GameInfo/CurrentPlayerText';


export default function GameInfo(props) {
    return (
        <div className="gameRegion gameInfo">
            <PlayerNameInput playerNumber={1} playerName="Player One" />
            <PlayerNameInput playerNumber={2} playerName="Player Two" />
            <RestartButton />
            <CurrentPlayerText playerName="Player One" playerNumber={1} />
            <VictoryText playerName="Player Two" playerNumber={2} />
        </div>
    );
}