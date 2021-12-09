import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getMonsters } from "./actions/monsterActions";
import thunk from 'redux-thunk';
import reducer from './reducers/monsterReducer';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(getMonsters())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
