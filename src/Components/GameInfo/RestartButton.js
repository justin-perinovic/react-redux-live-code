import React from 'react';

function RestartButton(props) {
    return (
        <button onClick={props.onClick} className="restartButton">Restart Game</button>
    );
}

RestartButton.propTypes = {
    onClick: React.PropTypes.func.isRequired
};

export default RestartButton;