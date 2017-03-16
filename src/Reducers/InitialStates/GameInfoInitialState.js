const getInitialStateBranch = () => ({
    players: {
        1: {
            name: 'Player One'
        },
        2: {
            name: 'Player Two'
        }
    },
    columnCount: 9,
    rowCount: 7,
    numberInARowToWin: 5
});

export default function getInitialState() {
    return {
        currentGame: getInitialStateBranch(),
        nextGame: getInitialStateBranch()
    }
};