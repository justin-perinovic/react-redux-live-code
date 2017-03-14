import React from 'react';

import Tile from 'Components/Board/Tile';


function Column(props) {
    return (
        <div className="column">
            <Tile wasWinningTile={true} />
            <Tile wasWinningTile={false} />
            <Tile />
            <Tile wasWinningTile={false} owningPlayerNumber={1} />
            <Tile wasWinningTile={true} owningPlayerNumber={1} />
            <Tile owningPlayerNumber={1} />
        </div>
    );
}

Column.defaultProps = {
};


export default Column;