import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import  { Provider } from "react-redux";
import reducer from "./reducers/reducer";

export const API_KEY = "RGAPI-4f5d0807-fcca-4d80-b79f-11c793a19b50"

const store = createStore(reducer, applyMiddleware(thunk,))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
