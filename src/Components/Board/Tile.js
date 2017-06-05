import React from 'react';
import * as Corners from 'Constants/Corners'
import * as Sides from 'Constants/Sides'
import Corner from 'Components/Board/Tile/Corner';
import Side from 'Components/Board/Tile/Side';

function renderCorner(cornerLocation) {
    return (
        <Corner key={cornerLocation} cornerLocation={cornerLocation} />
    )
}

function renderSide(side) {
    return (
        <Side key={side} side={side} />
    )
}

function Tile(props) {
    const {sides, ...otherProps} = props;

    const tileClasses = ['tile'];

    const renderedCorners = [
        renderCorner(Corners.TOP_LEFT)
    ];
    const renderedSides = [
        renderSide(Sides.TOP),
        renderSide(Sides.LEFT)
    ];

    if (props.sides.hasOwnProperty(Sides.RIGHT)) {
        renderedCorners.push(renderCorner(Corners.TOP_RIGHT));
        renderedCorners.push(renderCorner(Corners.BOTTOM_RIGHT));

        renderedSides.push(renderSide(Sides.RIGHT));
    }
    if (props.sides.hasOwnProperty(Sides.BOTTOM)) {
        renderedCorners.push(renderCorner(Corners.BOTTOM_LEFT));

        renderedSides.push(renderSide(Sides.BOTTOM));        
    }

    return (
        <div {...otherProps} className={tileClasses.join(' ')}>
            {renderedCorners}
            {renderedSides}
        </div>
    );
}

Tile.propTypes = {
    sides: React.PropTypes.objectOf(React.PropTypes.number).isRequired
};


export default Tile;