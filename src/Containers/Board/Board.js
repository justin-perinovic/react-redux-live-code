import {connect} from 'react-redux';
import Board from 'Components/Board/Board';
import * as BoardActions from 'Actions/BoardActions';


export default connect(
    function mapStateToProps(state) {
        return {
            tiles: state.Board.tiles,
            isWinnerFound: state.Board.isWinnerFound,
            claimedSquares: state.Board.claimedSquares,
            rowCount: state.GameInfo.currentGame.rowCount,
            columnCount: state.GameInfo.currentGame.columnCount,
            players: state.GameInfo.currentGame.players,
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            claimTile: function(columnIndex, rowIndex) {
                dispatch(BoardActions.claimTile(columnIndex, rowIndex));
            }
        }
    }
)(Board);
