export enum ACTIONS_TYPE {
  ADD_POST_CALLBACK = 'ProfilePageExchange/ADD_POST_CALLBACK',
  ADD_NEW_POST_TEXT_CALLBACK = 'ProfilePageExchange/ADD_NEW_POST_TEXT_CALLBACK',
  ADD_MESSAGE_CALLBACK = 'DialogsPageExchange/ADD_MESSAGE_CALLBACK',
  ADD_NEW_MESSAGE_TEXT_CALLBACK = 'DialogsPageExchange/ADD_NEW_MESSAGE_TEXT_CALLBACK',
}

export const addPostAC = () => {
  return {
    type: ACTIONS_TYPE.ADD_POST_CALLBACK,
    // payload: {
    //   post
    // }
    // postText: postText
  } as const
}

export const addNewPostTextAC = (newPostText: string) => {
  return {
    type: ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK,
    payload: {
      newPostText
    }
    // newPostText: newPostText
  } as const
}

export const addMessageAC = () => {
  return {
    type: ACTIONS_TYPE.ADD_MESSAGE_CALLBACK,
    // payload: {
    //   message
    // },
    // messageText: messageText
  } as const
}

export const addNewMessageTextAC = (newMessageText: string) => {
  return {
    type: ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT_CALLBACK,
    payload: {
      newMessageText
    },
    // newMessageText: newMessageText
  } as const
}

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof addNewMessageTextAC>
  | ReturnType<typeof addNewPostTextAC>