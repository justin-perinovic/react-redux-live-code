import {connect} from 'react-redux';
import GameInfo from 'Components/GameInfo/GameInfo';
import * as GameActions from 'Actions/GameActions';
import * as GameInfoActions from 'Actions/GameInfoActions';


export default connect(
    function mapStateToProps(state) {
        return {
            gameInfo: state.GameInfo.nextGame,
            currentPlayersData: state.GameInfo.currentGame.players,
            currentPlayer: state.Board.currentPlayer,
            isGameComplete: state.Board.isGameComplete,
            tiles: state.Board.tiles
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            restartGame: function() {
                dispatch(GameActions.RestartGame());
            },
            updatePlayerName: function(playerNumber, playerName) {
                dispatch(GameInfoActions.UpdatePlayerName(playerNumber, playerName));
            },
            updateColumnCount: function(count) {
                dispatch(GameInfoActions.UpdateColumnCount(count));
            },
            updateRowCount: function(count) {
                dispatch(GameInfoActions.UpdateRowCount(count));
            },
            updateNumberInARowToWin: function(number) {
                dispatch(GameInfoActions.UpdateNumberInARowToWin(number));
            }
        }
    }
)(GameInfo);