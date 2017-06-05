import React from 'react';
import * as Sides from 'Constants/Sides'

const sideClasses = {
    [Sides.TOP]: 'top',
    [Sides.RIGHT]: 'right',
    [Sides.BOTTOM]: 'bottom',
    [Sides.LEFT]: 'left',
};

function Side(props) {
    const classNames = [
        'side',
        sideClasses[props.side]
    ];

    return (
        <div className={classNames.join(' ')}>
        </div>
    )
}

Side.propTypes = {
    side: React.PropTypes.string.isRequired
};

export default Side;