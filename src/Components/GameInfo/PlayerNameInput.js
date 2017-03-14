import React from 'react';


function PlayerNameText(props) {
    return (
        <div className="inputArea">
            <span>Player {props.playerNumber} Name:</span>
            &nbsp;
            <input type="text" defaultValue={props.playerName} />
        </div>
    )
}

PlayerNameText.defaultProps = {
    playerNumber: React.PropTypes.number.isRequired,
    playerName: React.PropTypes.string.isRequired
};


export default PlayerNameText;