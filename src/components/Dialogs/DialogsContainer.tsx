import {addMessage, addNewMessageText} from "../../redux/action-thunk";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
  addMessage: () => void
  addNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     addMessage: () => {
//       const newMessageText = store.getState().dialogsPage.newMessageText
//       dispatch(addMessageAC(newMessageText))
//     },
//     onMessageChange: (text: string) => {
//       dispatch(addNewMessageTextAC(text))
//     },
//   }
// }

export const DialogsContainer = connect(mapStateToProps,
  {addMessage, addNewMessageText,})(Dialogs);
