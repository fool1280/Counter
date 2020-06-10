import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const initialState = {
  count: 0,
  color: "",
  box: []
}

function reducer(state=initialState, action){
  if (action.type === "+") {
    state.count++
    state.box.push(state.color);
  }
  if (action.type === "-" && state.count>0) {
    state.count--
    state.box.splice(state.box.length-1, 1)
  }
  if (action.type === "reset") {
    state.count = 0
    state.box = []
  }
  if (action.type === "change-color") {
    console.log("Color:", action.payload);
    state.color = action.payload
  }
  if (action.type === "change-color-box") {
    state.box[action.payload.index] = action.payload.boxColor;
  }
  state.box = [...state.box]
  return {...state}
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
