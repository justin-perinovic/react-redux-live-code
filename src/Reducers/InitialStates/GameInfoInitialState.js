const getInitialStateBranch = () => ({
    players: {
        1: {
            name: 'Player One'
        },
        2: {
            name: 'Player Two'
        }
    },
    columnCount: 3,
    rowCount: 3
});

export default function getInitialState() {
    return {
        currentGame: getInitialStateBranch(),
        nextGame: getInitialStateBranch()
    }
};