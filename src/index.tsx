import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppRootState, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
// import {subscribe} from './redux/store'



const renderEntireTree = (state: AppRootState) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  renderEntireTree(store.getState())
})

// subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
