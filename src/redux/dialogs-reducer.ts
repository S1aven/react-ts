import {v1} from "uuid";
import {ACTIONS_TYPE, ActionsTypes} from "./action";

export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type DialogsPageType = {
  newMessageText: string
  dialogs: DialogType[]
  messages: MessageType[]
}

const initialState: DialogsPageType = {
  newMessageText: '',
  dialogs: [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Sacha'},
    {id: v1(), name: 'Sergei'},
  ],

  messages: [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How is your it-kamasutra'},
    {id: v1(), message: 'Yo'},
  ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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