import React from 'react';
import * as Corners from 'Constants/Corners'
import * as Sides from 'Constants/Sides'
import Corner from 'Components/Board/Tile/Corner';
import Side from 'Components/Board/Tile/Side';
import * as BoardUtils from 'Utils/BoardUtils';

function Tile(props) {
    return(
        null
    );
}

Tile.propTypes = {
    sides: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    claimTile: React.PropTypes.func.isRequired,
    tiles: React.PropTypes.object.isRequired,
    rowNum: React.PropTypes.number.isRequired,
    colNum: React.PropTypes.number.isRequired,
    owningPlayerNumber: React.PropTypes.number,
    players: React.PropTypes.object.isRequired,
    isLosingSquare: React.PropTypes.bool.isRequired
};


export default Tile;
