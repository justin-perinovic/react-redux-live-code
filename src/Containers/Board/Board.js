import {connect} from 'react-redux';
import Board from 'Components/Board/Board';
import * as BoardActions from 'Actions/BoardActions';


export default connect(
    function mapStateToProps(state) {
        return {
            gameInfo: state.GameInfo.nextGame,
            tiles: state.Board.tiles,
            currentPlayer: state.Board.currentPlayer,
            isGameComplete: state.Board.isGameComplete,
            victoryTiles: state.Board.victoryTiles
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            addToColumn: function(columnNumber) {
                dispatch(BoardActions.AddToColumn(columnNumber));
            }
        }
    }
)(Board);