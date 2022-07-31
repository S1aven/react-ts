import {addMessage, addNewMessageText} from "../../redux/action-thunk";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
    dialogsPage: state.dialogsPage,
  }
}

// let AuthRedirectComponent = (props: DialogsPropsType) => {
//   if (!props.isAuth) {
//     return <Navigate to={'/login'}/>
//   }
//   return <Dialogs {...props}/>
// }

//
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
  {addMessage, addNewMessageText,})(withAuthRedirect(Dialogs));
