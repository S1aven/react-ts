import React from 'react';
import {addMessageAC, addNewMessageTextAC} from "../../redux/action";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {AppRootState, store} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";

// export const DialogsContainer = () => {
//
//   // const state = props.store.getState().dialogsPage;
//   //
//   // const addMessage = () => {
//   //   props.store.dispatch(addMessageAC(state.newMessageText))
//   // }
//   //
//   // const onMessageChange = (text: string) => {
//   //   props.store.dispatch(addNewMessageTextAC(text))
//   // }
//
//   return (<StoreContext.Consumer>
//     {(store) => {
//
//       const state = store.getState().dialogsPage;
//
//       const addMessage = () => {
//         store.dispatch(addMessageAC(state.newMessageText))
//       }
//
//       const onMessageChange = (text: string) => {
//         store.dispatch(addNewMessageTextAC(text))
//       }
//
//       return  <Dialogs
//         addMessage={addMessage}
//         onMessageChange={onMessageChange}
//         dialogsPage={state}
//       />}
//     }
//   </StoreContext.Consumer>
//   )
// };

type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
  addMessage: () => void
  onMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: () => {
      dispatch(addMessageAC())
    },
    onMessageChange: (text: string) => {
      dispatch(addNewMessageTextAC(text))
    },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
