import _ from 'lodash';
import * as Sides from 'Constants/Sides';


// TODO: Put this somewhere else
const recognizedSides = [
    Sides.LEFT,
    Sides.RIGHT,
    Sides.TOP,
    Sides.BOTTOM
];

function handleUnrecognizedSide(side) {
    if (recognizedSides.indexOf(side) === -1) {
        throw new Error(`Unrecognized side: ${side}`);
    }
}

export function getOffsetX(side) {
    handleUnrecognizedSide(side);

    if (side === Sides.TOP || side === Sides.BOTTOM) {
        return 1;
    } else if (side === Sides.RIGHT) {
        return 2;
    } else {
        return 0;
    }
}

export function getOffsetY(side) {
    handleUnrecognizedSide(side);
    
    if (side === Sides.BOTTOM) {
        return 1;
    } else {
        return 0;
    }
}

export function getOwningPlayerNumber(columnI, rowI, side, board) {
    handleUnrecognizedSide(side);

    const x = columnI + getOffsetX(side);
    const y = rowI + getOffsetY(side);
    return board[x][y];
}

// TODO: Make this way more efficient
export function getNewlyClaimedSquares(moveX, moveY, colCount, rowCount, oldBoard, newBoard) {
    const oldClaimedSquares = getClaimedSquares(colCount, rowCount, oldBoard);
    const newClaimedSquares = getClaimedSquares(colCount, rowCount, newBoard);

    const newlyClaimedTiles = {};
    _.forEach(newClaimedSquares, (columnClaimedSquares, columnIndex) => {
        _.forEach(columnClaimedSquares, (isClaimed, rowIndex) => {
            if (isClaimed && !oldClaimedSquares[columnIndex][rowIndex]) {
                if (!newlyClaimedTiles[columnIndex]) {
                    newlyClaimedTiles[columnIndex] = {};
                }
                newlyClaimedTiles[columnIndex][rowIndex] = true;
            }
        });
    });

    return newlyClaimedTiles;
}

function getClaimedSquares(colCount, rowCount, board) {
    const claimedSquares = {};
    for (let colI = 0; colI < colCount; colI++) {
        const baseDataIndexX = (colI * 2);

        claimedSquares[colI] = {};

        for (let rowI = 0; rowI < rowCount; rowI++) {
            const baseDataIndexY = rowI;

            let isClaimed = true;
            recognizedSides.forEach((side) => {
                const tileOwner = getOwningPlayerNumber(baseDataIndexX, baseDataIndexY, side, board);
                if (!tileOwner) {
                    isClaimed = false;
                }
            });

            claimedSquares[colI][rowI] = isClaimed;
        }
    }

    return claimedSquares;
}

export function isBoardFull(colCount, rowCount, boardData) {
    const claimedSquares = getClaimedSquares(colCount, rowCount, boardData);

    let areSquaresUnclaimed = false;
    for (let colI = 0; colI < colCount; colI++) {
        for (let rowI = 0; rowI < rowCount; rowI++) {
            if (!claimedSquares[colI][rowI]) {
                areSquaresUnclaimed = true;
            }
        }
    }

    return (!areSquaresUnclaimed);
}

export function getWinner(claimedSquares) {
    const scores = {
        1: 0,
        2: 0
    };
    _.forEach(claimedSquares, (claim, claimedSquareX) => {
        const addPointForPlayer = (playerNumber) => {
            if (playerNumber) {
                scores[playerNumber] += 1;
            }
        };

        if (_.isPlainObject(claim)) {
            // claimedSquares is full board
            _.forEach(claim, (playerNumber) => {
                addPointForPlayer(playerNumber);
            });
        } else {
            // claimedSquares is single column
            addPointForPlayer(claim);
        }
        
    });

    if (scores[1] > scores[2]) {
        return 1;
    } else if (scores[2] > scores[1]) {
        return 2;
    }
    return null;
}

export function getInitialClaimedSquares(columnCount, rowCount) {
    const claimedSquares = {};
    for (let colI = 0; colI < columnCount; colI++) {
        claimedSquares[colI] = {};
        for (let rowI = 0; rowI < rowCount; rowI++) {
            claimedSquares[colI][rowI] = 0;
        }
    }

    return claimedSquares;
}

export function getFreshGameBoard(columnCount, rowCount) {
    const tiles = {};
    for (let col = 0; col < ((columnCount*2)+1); col++) {
        tiles[col] = {};

        for (let row = 0; row < (rowCount+1); row++) {
            tiles[col][row] = 0;
        }
    }

    return tiles;
}