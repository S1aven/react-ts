import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {RootStateType} from "./redux/store";
import {ActionsTypes} from "./redux/action";
import {AppRootState} from "./redux/redux-store";

type AppPropsType = {
  state: AppRootState
  dispatch: (action: ActionsTypes) => void
}

export const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path={'/profile/*'} element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />}/>
            <Route path={'/dialogs/*'} element={<Dialogs
              newMessageText={props.state.dialogsPage.newMessageText}
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              dispatch={props.dispatch}
            />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
