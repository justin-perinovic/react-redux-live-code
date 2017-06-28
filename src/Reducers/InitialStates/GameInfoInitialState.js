const getInitialStateBranch = () => ({
    players: {
        1: {
            name: 'Jessica'
        },
        2: {
            name: 'Michael'
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