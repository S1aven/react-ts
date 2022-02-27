import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
  state: RootStateType
  addPostCallback: (postText: string) => void
  addMessageCallback: (messageText: string) => void
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
              addPostCallback={props.addPostCallback}
            />}/>
            <Route path={'/dialogs/*'} element={<Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              addMessageCallback={props.addMessageCallback}
            />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
