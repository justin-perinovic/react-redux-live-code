import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import RootReducer from 'Reducers/RootReducer';

import Board from 'Components/Board/Board';
import GameInfo from 'Components/GameInfo/GameInfo';

import 'App.css';

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Board />
          <GameInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
