import {connect} from 'react-redux';
import GameInfo from 'Components/GameInfo/GameInfo';
import * as GameActions from 'Actions/GameActions';
import * as GameInfoActions from 'Actions/GameInfoActions';


export default connect(
    function mapStateToProps(state) {
        return {
            nextGameInfo: state.GameInfo.nextGame,
            currentGameInfo: state.GameInfo.currentGame,
            currentPlayersData: state.GameInfo.currentGame.players,
            currentPlayer: state.Board.currentPlayer,
            claimedSquares: state.Board.claimedSquares,
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
            }
        }
    }
)(GameInfo);