import {
  // ACTIONS_TYPE,
  // ActionsTypes,
  DialogsPageType,
  MessageType
} from "./state";
import {v1} from "uuid";
import {ACTIONS_TYPE, ActionsTypes} from "./action";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {

    case ACTIONS_TYPE.ADD_MESSAGE_CALLBACK:
      const newMessage: MessageType = {
        id: v1(),
        ...action.payload
        // message: action.messageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      // renderOnChange()
      return state

    case ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT_CALLBACK:
      // state.newMessageText = action.newMessageText
      // renderOnChange()
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}