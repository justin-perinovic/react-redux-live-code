import _ from 'lodash';
import React from 'react';
import * as Sides from 'Constants/Sides';
import * as BoardUtils from 'Utils/BoardUtils';
import Tile from 'Components/Board/Tile';


class Column extends React.Component {
    constructor() {
        super();
    }

    render() {
        const tiles = [];

        const baseDataIndexX = (this.props.columnIndex * 2);
        
        const lastRowIndex = (this.props.rowCount - 1);
        for (let rowI = 0; rowI <= lastRowIndex; rowI++) {
            const baseDataIndexY = rowI;
            const isLastRow = Boolean(rowI === lastRowIndex);

            const getOwner = (side) => (
                BoardUtils.getOwningPlayerNumber(
                    baseDataIndexX,
                    baseDataIndexY,
                    side,
                    this.props.tiles
                )
            );

            const sides = {
                [Sides.LEFT]: getOwner(Sides.LEFT),
                [Sides.TOP]: getOwner(Sides.TOP),
            };
            if (isLastRow) {
                sides[Sides.BOTTOM] = getOwner(Sides.BOTTOM);
            }
            if (this.props.isLastColumn) {
                sides[Sides.RIGHT] = getOwner(Sides.RIGHT);
            }

            tiles.push(
                <Tile
                    key={rowI}
                    sides={sides}
                    tiles={this.props.tiles}
                    rowNum={rowI}
                    colNum={this.props.columnIndex}
                    claimTile={this.props.claimTile}
                    owningPlayerNumber={this.props.claimedSquares[rowI]}
                />
            )
        }

        
        const classNames = ['column'];

        const wrapperProps = {
            className: classNames.join(' ')
        };
        
        return (
            <div {...wrapperProps}>
                {tiles}
            </div>
        );
    }
}

Column.propTypes = {
    claimTile: React.PropTypes.func.isRequired,
    claimedSquares: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    tiles: React.PropTypes.object.isRequired,
    rowCount: React.PropTypes.number.isRequired,
    columnIndex: React.PropTypes.number.isRequired,
    isLastColumn: React.PropTypes.bool.isRequired,
    isGameComplete: React.PropTypes.bool.isRequired,    
};


export default Column;