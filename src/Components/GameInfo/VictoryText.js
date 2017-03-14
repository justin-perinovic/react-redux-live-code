import React from 'react';

import PlayerNameText from 'Components/GameInfo/PlayerNameText';


function VictoryText(props) {
    const cssClasses = ['playerName'];
    cssClasses.push(`player${props.playerNumber}Text`);

    return (
        <h1 className="victoryText">
            <PlayerNameText {...props} />
            &nbsp;
            <span>Wins!</span>
        </h1>
    )
}

VictoryText.defaultProps = {
};


export default VictoryText;