import _ from 'lodash';
import React from 'react';
import Column from 'Components/Board/Column';
import * as BoardUtils from 'Utils/BoardUtils';


function Board(props) {
    const columns = [];

    const claimedSquares = props.claimedSquares;
    
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
                claimTile={props.claimTile}
                claimedSquares={claimedSquares[colI]}
                players={props.players}
                winner={BoardUtils.getWinner(claimedSquares)}
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
    claimTile: React.PropTypes.func.isRequired,
    tiles: React.PropTypes.object.isRequired,
    rowCount: React.PropTypes.number.isRequired,
    columnCount: React.PropTypes.number.isRequired,
    players: React.PropTypes.object.isRequired
};


export default Board;
