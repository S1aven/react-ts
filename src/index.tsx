import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Store} from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";
import {subscribe} from './redux/state'

const state = Store.getState()

const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPostCallback={Store.addPostCallback.bind(Store)}
        addMessageCallback={Store.addMessageCallback.bind(Store)}
        addNewPostTextCallback={Store.addNewPostTextCallback.bind(Store)}
        addNewMessageTextCallback={Store.addNewMessageTextCallback.bind(Store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree()

subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
