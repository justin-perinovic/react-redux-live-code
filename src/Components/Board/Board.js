import React from 'react';

import Column from 'Components/Board/Column';


function Board(props) {
    return (
        <div className="gameInfo board">
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    );
}

Board.defaultProps = {
};


export default Board;