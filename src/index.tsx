import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ReduxStoreType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import StoreContext from './StoreContext';


const renderEntireTree = (store: ReduxStoreType) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App
          // store={store}
        />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store)

store.subscribe(() => {
  renderEntireTree(store)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
