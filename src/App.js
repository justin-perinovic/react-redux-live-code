import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import RootReducer from './Reducers/RootReducer';
import './App.css';

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="gameRegion board">
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile winningTile">
                <div className="hole player2Background"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile winningTile">
                <div className="hole player2Background"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole player1Background"></div>
              </div>
              <div className="tile winningTile">
                <div className="hole player2Background"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole player1Background"></div>
              </div>
              <div className="tile winningTile">
                <div className="hole player2Background"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole player1Background"></div>
              </div>
              <div className="tile winningTile">
                <div className="hole player2Background"></div>
              </div>
            </div>
            <div className="column">
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole player1Background"></div>
              </div>
              <div className="tile unwinningTile">
                <div className="hole player1Background"></div>
              </div>
            </div>
          </div>
          <div className="gameRegion gameInfo">
            <div className="playerNameInputArea">
              <span>Player 1 Name:</span>
              &nbsp;
              <input type="text" />
            </div>
            <div className="playerNameInputArea">
              <span>Player 2 Name:</span>
              &nbsp;
              <input type="text" />
            </div>
            <button className="restartButton">Restart Game</button>
            <h1 className="currentPlayer">
              <span>Current Player:</span>
              &nbsp;
              <span className="playerName player1Text">Player One</span>
            </h1>
            <h1 className="victoryText">
              <span className="playerName player2Text">Player Two</span>
              &nbsp;
              <span>Wins!</span>
            </h1>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
