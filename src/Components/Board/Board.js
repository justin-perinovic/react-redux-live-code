import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Column from 'Components/Board/Column';


function Board(props) {
    const isGameComplete = (
        props.isGameComplete
        || GameUtils.isBoardFull(props.tiles)
    );

    const columns = [];
    _.forEach(props.tiles, (columnData, columnIndex) => {
        columns.push(
            <Column
                key={columnIndex}
                columnData={columnData}
                addToColumn={() => {props.addToColumn(columnIndex)}}
                isGameComplete={isGameComplete}
                victoryTiles={props.victoryTiles}
                columnIndex={columnIndex}
            />
        )
    });
    
    return (
        <div className="gameRegion board">
            {columns}
        </div>
    );
}

Board.defaultProps = {
};


export default Board;