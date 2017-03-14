import React from 'react';

function Tile(props) {
    const tileClasses = ['tile'];
    if (props.wasWinningTile === true) {
        tileClasses.push('winningTile');
    } else if (props.wasWinningTile === false) {
        tileClasses.push('unwinningTile');
    }

    const holeClasses = ['hole'];
    if (props.hasOwnProperty('owningPlayerNumber')) {
        holeClasses.push(`player${props.owningPlayerNumber}Background`);
    }

    return (
        <div className={tileClasses.join(' ')}>
            <div className={holeClasses.join(' ')}></div>
        </div>
    );
}

Tile.defaultProps = {
    wasWinningTile: React.PropTypes.bool,
    owningPlayerNumber: React.PropTypes.number
};


export default Tile;