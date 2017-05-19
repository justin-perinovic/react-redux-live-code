import _ from 'lodash';
import React from 'react';
import * as GameUtils from 'Utils/GameUtils';
import Column from 'Components/Board/Column';


function Board(props) {
    const columns = [];
    _.forEach(props.tiles, (columnData, columnIndex) => {
        columns.push(
            <Column
                key={columnIndex}
                columnIndex={columnIndex}
                columnData={columnData}
                victoryTiles={props.victoryTiles}
                addTileToColumn={() => {props.addTileToColumn(columnIndex)}}
                isGameComplete={(
                    GameUtils.isBoardFull(props.tiles)
                    || props.isWinnerFound
                )}
            />
        )
    });

    return (
        <div className="gameRegion board">
            {columns}
        </div>
    );
}

Board.propTypes = {
    tiles: React.PropTypes.object.isRequired,
    addTileToColumn: React.PropTypes.func.isRequired
};


export default Board;