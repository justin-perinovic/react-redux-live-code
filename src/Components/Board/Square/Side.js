import React from 'react';
import * as Sides from 'Constants/Sides'

const sideClasses = {
    [Sides.TOP]: 'top',
    [Sides.RIGHT]: 'right',
    [Sides.BOTTOM]: 'bottom',
    [Sides.LEFT]: 'left',
};

class Side extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            null
        )
    }
}

Side.propTypes = {
    side: React.PropTypes.string.isRequired,
    claimTile: React.PropTypes.func.isRequired,
    owningPlayerNumber: React.PropTypes.number
};

export default Side;