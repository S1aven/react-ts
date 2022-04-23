import {UsersType} from "./users-reducer";

export enum ACTIONS_TYPE {
  ADD_POST_CALLBACK = 'ProfilePageExchange/ADD_POST_CALLBACK',
  ADD_NEW_POST_TEXT_CALLBACK = 'ProfilePageExchange/ADD_NEW_POST_TEXT_CALLBACK',
  ADD_MESSAGE_CALLBACK = 'DialogsPageExchange/ADD_MESSAGE_CALLBACK',
  ADD_NEW_MESSAGE_TEXT_CALLBACK = 'DialogsPageExchange/ADD_NEW_MESSAGE_TEXT_CALLBACK',
  FOLLOW_CALLBACK = 'UsersPage/FOLLOW_CALLBACK',
  UNFOLLOW_CALLBACK = 'UsersPage/UNFOLLOW_CALLBACK',
  SET_USERS = 'UsersPage/SET_USERS',
}

// ProfilePage

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

// MessagePage

export const addMessageAC = (message: string) => {
  return {
    type: ACTIONS_TYPE.ADD_MESSAGE_CALLBACK,
    payload: {
      message
    },
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

// UsersPage

export const followAC = (userId: string) => {
  return {
    type: ACTIONS_TYPE.FOLLOW_CALLBACK,
    payload: {
      userId
    },
  } as const
}

export const unfollowAC = (userId: string) => {
  return {
    type: ACTIONS_TYPE.UNFOLLOW_CALLBACK,
    payload: {
      userId
    },
  } as const
}

export const setUsersAC = (users: UsersType[]) => {
  return {
    type: ACTIONS_TYPE.SET_USERS,
    users
  } as const
}

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof addNewMessageTextAC>
  | ReturnType<typeof addNewPostTextAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>