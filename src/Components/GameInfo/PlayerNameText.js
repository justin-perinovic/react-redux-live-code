import React from 'react';


function PlayerNameText(props) {
    const cssClasses = ['playerName'];
    cssClasses.push(`player${props.playerNumber}Text`);

    return (
        <span className={cssClasses.join(' ')}>{props.playerName}</span>
    )
}

PlayerNameText.defaultProps = {
    playerName: React.PropTypes.string.isRequired,
    playerNumber: React.PropTypes.number.isRequired
};


export default PlayerNameText;