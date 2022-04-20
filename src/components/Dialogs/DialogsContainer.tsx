import React from 'react';
import {addMessageAC, addNewMessageTextAC} from "../../redux/action";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import StoreContext from "../../StoreContext";

// type DialogsContainerPropsType = {
//   store: ReduxStoreType
// }

export const DialogsContainer = () => {

  // const state = props.store.getState().dialogsPage;
  //
  // const addMessage = () => {
  //   props.store.dispatch(addMessageAC(state.newMessageText))
  // }
  //
  // const onMessageChange = (text: string) => {
  //   props.store.dispatch(addNewMessageTextAC(text))
  // }

  return (<StoreContext.Consumer>
    {(store) => {

      const state = store.getState().dialogsPage;

      const addMessage = () => {
        store.dispatch(addMessageAC(state.newMessageText))
      }

      const onMessageChange = (text: string) => {
        store.dispatch(addNewMessageTextAC(text))
      }

      return  <Dialogs
        addMessage={addMessage}
        onMessageChange={onMessageChange}
        dialogsPage={state}
      />}
    }
  </StoreContext.Consumer>
  )
};
