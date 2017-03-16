import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Column from 'Components/Board/Column';


function Board(props) {
    const isGameComplete = (props.isGameComplete || GameUtils.isBoardFull(props.tiles));

    const columns = [];
    _.forEach(props.tiles, (columnData, columnNumber) => {
        columns.push(
            <Column
                key={columnNumber}
                addToColumn={() => {props.addToColumn(columnNumber)}}
                isGameComplete={isGameComplete}
                columnData={columnData}
                columnNumber={columnNumber}
                victoryTiles={props.victoryTiles}
            />
        );
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