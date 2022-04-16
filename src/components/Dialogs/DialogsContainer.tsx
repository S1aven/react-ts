import React from 'react';
import {addMessageAC, addNewMessageTextAC} from "../../redux/action";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
  store: ReduxStoreType
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

  const state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(addMessageAC(state.newMessageText))
  }

  const onMessageChange = (text: string) => {
    props.store.dispatch(addNewMessageTextAC(text))
  }

  return (<Dialogs
    addMessage={addMessage}
    onMessageChange={onMessageChange}
    dialogsPage={state}
  />);
};
