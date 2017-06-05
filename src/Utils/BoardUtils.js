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

export function getNewlyClaimedTiles(victoryRequirement, playerNumber, baseX, baseY, board) {
    function shiftHorizontal(multiplier, distance, vector) {
        return {
            x: vector.x + (multiplier * distance),
            y: vector.y
        }
    }
    function shiftVertical(multiplier, distance, vector) {
        return {
            x: vector.x,
            y: vector.y + (multiplier * distance)
        }
    }

    function tileBelongsToPlayer(vector) {
        const x = vector.x;
        const y = vector.y;
        
        if (
            board[x]
            && board[x][y]
            && board[x][y] === playerNumber
        ) {
            return true;
        }
        
        return false;
    }


    let victoryTiles = {};
    const baseVector = {x: parseInt(baseX, 10), y: parseInt(baseY, 10)};

    // Short out if function was eroneously called on tile not belonging to player
    if (!tileBelongsToPlayer(baseVector)) {
        return victoryTiles;
    }

    
    const routineSets = [
        [
            [shiftHorizontal.bind(this, -1)],
            [shiftHorizontal.bind(this, 1)]
        ],
        [
            [shiftVertical.bind(this, -1)],
            [shiftVertical.bind(this, 1)]
        ],
        [
            [shiftHorizontal.bind(this, -1), shiftVertical.bind(this, -1)],
            [shiftHorizontal.bind(this, 1), shiftVertical.bind(this, 1)],
        ],
        [
            [shiftHorizontal.bind(this, -1), shiftVertical.bind(this, 1)],
            [shiftHorizontal.bind(this, 1), shiftVertical.bind(this, -1)],
        ]
    ];

    routineSets.forEach((_routineSet) => {
        let routineSet = _routineSet.slice();

        let playerTiles = {};
        playerTiles[baseVector.x] = {[baseVector.y]: true};

        let playerTilesCount = 1;

        let distance = 1;
        while (routineSet.length) {
            const newRoutineSet = [];

            routineSet.forEach((subroutineSet) => {
                let runningVector = _.clone(baseVector);
                
                subroutineSet.forEach((subroutine) => {
                    runningVector = subroutine(distance, runningVector);
                });

                if (tileBelongsToPlayer(runningVector)) {
                    newRoutineSet.push(subroutineSet);
                    if (!_.has(playerTiles, [runningVector.x, runningVector.y])) {
                        playerTiles = _.merge(playerTiles, {[runningVector.x]: {[runningVector.y]: true}});
                        playerTilesCount += 1;
                    }
                }
            });

            routineSet = newRoutineSet;
            distance += 1;
        }

        if (playerTilesCount >= victoryRequirement) {
            victoryTiles = _.merge(victoryTiles, playerTiles);
        }
    });

    return victoryTiles;
}

export function getClaimedSquares(colCount, rowCount, board) {
    const claimedSquares = {};
    for (let colI = 0; colI < colCount; colI++) {
        const baseDataIndexX = (colI * 2);

        claimedSquares[colI] = {};

        for (let rowI = 0; rowI < rowCount; rowI++) {
            const baseDataIndexY = rowI;

            let potentialSquareOwnerNumber = null;
            let ownerFound = true;

            recognizedSides.forEach((side) => {
                let tileOwnerNumber = getOwningPlayerNumber(baseDataIndexX, baseDataIndexY, side, board);

                if (potentialSquareOwnerNumber === null) {
                    potentialSquareOwnerNumber = tileOwnerNumber;
                } else if (
                    tileOwnerNumber === 0
                    || potentialSquareOwnerNumber !== tileOwnerNumber
                ) {
                    ownerFound = false;
                }
            });

            claimedSquares[colI][rowI] = (ownerFound ? potentialSquareOwnerNumber : 0);
        }
    }

    return claimedSquares;
}

export function isBoardFull(boardData) {
    let foundEmptyColumn = false;
    _.forEach(boardData, (columnData) => {
        _.forEach(columnData, (ownerNumber) => {
            if (ownerNumber === 0) {
                foundEmptyColumn = true;
            }
        });
    });

    return (!foundEmptyColumn);
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