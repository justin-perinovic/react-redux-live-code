import React from 'react';
import * as Corners from 'Constants/Corners'

const cornerClasses = {
    [Corners.TOP_LEFT]: 'top-left',
    [Corners.TOP_RIGHT]: 'top-right',
    [Corners.BOTTOM_LEFT]: 'bottom-left',
    [Corners.BOTTOM_RIGHT]: 'bottom-right',
};

function Corner(props) {
    const classNames = [
        'corner',
        cornerClasses[props.cornerLocation]
    ];

    return (
        <div className={classNames.join(' ')}>
        </div>
    )
}

Corner.propTypes = {
    cornerLocation: React.PropTypes.string.isRequired
};

export default Corner;