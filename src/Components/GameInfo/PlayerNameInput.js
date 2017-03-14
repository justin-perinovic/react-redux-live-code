import React from 'react';


function PlayerNameText(props) {
    return (
        <div className="playerNameInputArea">
            <span>Player {props.playerNumber} Name:</span>
            &nbsp;
            <input type="text" value={props.playerName} />
        </div>
    )
}

PlayerNameText.defaultProps = {
    playerNumber: React.PropTypes.number.isRequired,
    playerName: React.PropTypes.string.isRequired
};


export default PlayerNameText;