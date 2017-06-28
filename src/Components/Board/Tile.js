import React from 'react';
import * as Corners from 'Constants/Corners'
import * as Sides from 'Constants/Sides'
import Corner from 'Components/Board/Tile/Corner';
import Side from 'Components/Board/Tile/Side';
import * as BoardUtils from 'Utils/BoardUtils';

function Tile(props) {
    function renderSide(side) {
        const baseX = props.colNum * 2;
        const baseY = props.rowNum;

        const claimTile = () => {
            props.claimTile(
                baseX + BoardUtils.getOffsetX(side),
                baseY + BoardUtils.getOffsetY(side)
            )
        };

        const owningPlayerNumber = BoardUtils.getOwningPlayerNumber(
            baseX,
            baseY,
            side,
            props.tiles
        );

        return (
            <Side
                key={side}
                side={side}
                claimTile={claimTile}
                owningPlayerNumber={owningPlayerNumber}
            />
        )
    }

    function renderCorner(cornerLocation) {
        return (
            <Corner
                key={cornerLocation}
                cornerLocation={cornerLocation}
            />
        )
    }

    const classNames = [
        'tile'
    ];
    if (props.isLosingSquare) {
        classNames.push('unwinningTile')
    }

    let background = null;
    let playerLetter = null;
    if (props.owningPlayerNumber) {
        const bgClasses = [
            'background',
            `player${props.owningPlayerNumber}Background`
        ];
        background = (
            <div className={bgClasses.join(' ')}></div>
        )

        playerLetter = (
            <div className="playerLetter">
                {props.players[props.owningPlayerNumber].name[0].toUpperCase()}
            </div>
        )
    }
    
    const sides = [
        renderSide(Sides.TOP),
        renderSide(Sides.LEFT)
    ];

    const corners = [
        renderCorner(Corners.TOP_LEFT)
    ];

    if (props.sides.hasOwnProperty(Sides.RIGHT)) {
        corners.push(renderCorner(Corners.TOP_RIGHT));
        corners.push(renderCorner(Corners.BOTTOM_RIGHT));

        sides.push(renderSide(Sides.RIGHT));
    }
    if (props.sides.hasOwnProperty(Sides.BOTTOM)) {
        corners.push(renderCorner(Corners.BOTTOM_LEFT));

        sides.push(renderSide(Sides.BOTTOM));
    }


    return (
        <div className={classNames.join(' ')}>
            {background}
            {playerLetter}
            {sides}
            {corners}
        </div>
    )
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
