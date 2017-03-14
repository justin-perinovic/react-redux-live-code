import React from 'react';

import PlayerNameText from 'Components/GameInfo/PlayerNameText';


function CurrentPlayerText(props) {
    return (
        <h1 className="currentPlayer">
            <span>Current Player:</span>
            &nbsp;
            <PlayerNameText {...props} />
        </h1>
    );
}

CurrentPlayerText.defaultProps = {
};


export default CurrentPlayerText;