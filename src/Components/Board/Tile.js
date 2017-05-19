import React from 'react';

function Tile(props) {
    const {wasWinningTile, owningPlayerNumber, ...otherProps} = props;

    const tileClasses = ['tile'];
    if (wasWinningTile === true) {
        tileClasses.push('winningTile');
    } else if (wasWinningTile === false) {
        tileClasses.push('unwinningTile');
    }

    const holeClasses = ['hole'];
    if (owningPlayerNumber) {
        holeClasses.push(`player${owningPlayerNumber}Background`);
    }

    return (
        <div {...otherProps} className={tileClasses.join(' ')}>
            <div className={holeClasses.join(' ')}></div>
        </div>
    );
}

Tile.propTypes = {
    wasWinningTile: React.PropTypes.bool,
    owningPlayerNumber: React.PropTypes.number
};


export default Tile;