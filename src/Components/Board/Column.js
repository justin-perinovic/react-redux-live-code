import React from 'react';

import Tile from 'Components/Board/Tile';


function Column(props) {
    return (
        <div className="column">
            <Tile wasWinningTile={true} />
            <Tile wasWinningTile={false} />
            <Tile />
            <Tile wasWinningTile={true} owningPlayerNumber={1} />
            <Tile wasWinningTile={false} owningPlayerNumber={2} />
            <Tile owningPlayerNumber={2} />
        </div>
    );
}

Column.defaultProps = {
};


export default Column;