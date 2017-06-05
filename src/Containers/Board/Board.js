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
            addTileToColumn: function(columnIndex) {
                dispatch(BoardActions.AddToColumn(columnIndex));
            }
        }
    }
)(Board);