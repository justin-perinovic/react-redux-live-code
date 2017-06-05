import _ from 'lodash';
import React from 'react';
import * as Sides from 'Constants/Sides';
import * as GameUtils from 'Utils/GameUtils';
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

            const sides = {
                [Sides.LEFT]: this.props.tiles[baseDataIndexX][baseDataIndexY],
                [Sides.TOP]: this.props.tiles[baseDataIndexX+1][baseDataIndexY],
            };
            if (isLastRow) {
                sides[Sides.BOTTOM] = this.props.tiles[baseDataIndexX+1][baseDataIndexY+1];
            }
            if (this.props.isLastColumn) {
                sides[Sides.RIGHT] = this.props.tiles[baseDataIndexX+2][baseDataIndexY];
                console.log('right')
            }

            tiles.push(
                <Tile
                    key={rowI}
                    sides={sides}
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
    tiles: React.PropTypes.object.isRequired,
    rowCount: React.PropTypes.number.isRequired,
    columnIndex: React.PropTypes.number.isRequired,
    isLastColumn: React.PropTypes.bool.isRequired,
    isGameComplete: React.PropTypes.bool.isRequired,
};


export default Column;