import _ from 'lodash';
import React from 'react';
import Column from 'Components/Board/Column';


function Board(props) {
    const columns = [];

    const lastColumnIndex = (props.columnCount - 1);
    for (let colI = 0; colI <= lastColumnIndex; colI++) {
        const isLastColumn = Boolean(colI === lastColumnIndex);

        columns.push(
            <Column
                key={colI}
                columnIndex={colI}
                isLastColumn={isLastColumn}
                isGameComplete={false}
                tiles={props.tiles}
                rowCount={props.rowCount}
            />
        )
    }

    return (
        <div className="gameRegion board">
            {columns}
        </div>
    );
}

Board.propTypes = {
    tiles: React.PropTypes.object.isRequired,
    addTileToColumn: React.PropTypes.func.isRequired,
    rowCount: React.PropTypes.number.isRequired,
    columnCount: React.PropTypes.number.isRequired,
};


export default Board;