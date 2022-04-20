import {addMessageAC, addNewMessageTextAC} from "../../redux/action";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState, store} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";

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
      const newMessageText = store.getState().dialogsPage.newMessageText
      dispatch(addMessageAC(newMessageText))
    },
    onMessageChange: (text: string) => {
      dispatch(addNewMessageTextAC(text))
    },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
