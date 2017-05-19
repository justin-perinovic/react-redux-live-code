import React from 'react';


function PlayerNameText(props) {
    return (
        <div className="inputArea">
            <span>Player {props.playerNumber} Name:</span>
            &nbsp;
            <input onChange={props.onChange} type="text" value={props.playerName} />
        </div>
    )
}

PlayerNameText.propTypes = {
    playerNumber: React.PropTypes.number.isRequired,
    playerName: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default PlayerNameText;