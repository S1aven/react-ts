import {addMessageCallback, addPostCallback, RootStateType} from "./state";
import ReactDOM from "react-dom";
import React from "react";
import {App} from "../App";

export const renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPostCallback={addPostCallback}
        addMessageCallback={addMessageCallback}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}