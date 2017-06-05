import {connect} from 'react-redux';
import Board from 'Components/Board/Board';
import * as BoardActions from 'Actions/BoardActions';


export default connect(
    function mapStateToProps(state) {
        return {
            tiles: state.Board.tiles,
            victoryTiles: state.Board.victoryTiles,
            isWinnerFound: state.Board.isWinnerFound,
            rowCount: state.GameInfo.currentGame.rowCount,
            columnCount: state.GameInfo.currentGame.columnCount,
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