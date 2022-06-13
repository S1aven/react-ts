import {UsersType} from "./users-reducer";
import {ProfileType} from "./profile-reducer";
import {initialStateType} from "./auth-reducer";

export enum ACTIONS_TYPE {
  ADD_POST_CALLBACK = 'ProfilePageExchange/ADD_POST_CALLBACK',
  ADD_NEW_POST_TEXT_CALLBACK = 'ProfilePageExchange/ADD_NEW_POST_TEXT_CALLBACK',
  ADD_MESSAGE_CALLBACK = 'DialogsPageExchange/ADD_MESSAGE_CALLBACK',
  ADD_NEW_MESSAGE_TEXT_CALLBACK = 'DialogsPageExchange/ADD_NEW_MESSAGE_TEXT_CALLBACK',
  FOLLOW_CALLBACK = 'UsersPageExchange/FOLLOW_CALLBACK',
  UNFOLLOW_CALLBACK = 'UsersPageExchange/UNFOLLOW_CALLBACK',
  SET_USERS = 'UsersPageExchange/SET_USERS',
  SET_CURRENT_PAGE = 'UsersPageExchange/SET_CURRENT_PAGE',
  SET_TOTAL_USER_COUNT = 'UsersPageExchange/SET_TOTAL_USER_COUNT',
  TOGGLE_IS_FETCHING = 'UsersPageExchange/TOGGLE_IS_FETCHING',
  SET_USER_PROFILE_CALLBACK = 'ProfilePageExchange/SET_USER_PROFILE_CALLBACK',
  SET_USER_DATA = 'SET_USER_DATA',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'UsersPageExchange/TOGGLE_IS_FOLLOWING_PROGRESS'
}

// Auth

export const setAuthUserData = (data: initialStateType) => {
  return {
    type: ACTIONS_TYPE.SET_USER_DATA,
    payload: {
      data
    }
  } as const
}

// ProfilePage

export const addPost = () => {
  return {
    type: ACTIONS_TYPE.ADD_POST_CALLBACK,
  } as const
}

export const addNewPostText = (newPostText: string) => {
  return {
    type: ACTIONS_TYPE.ADD_NEW_POST_TEXT_CALLBACK,
    payload: {
      newPostText
    }
  } as const
}

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: ACTIONS_TYPE.SET_USER_PROFILE_CALLBACK,
    payload: {
      profile
    }
  } as const
}

// MessagePage

export const addMessage = () => {
  return {
    type: ACTIONS_TYPE.ADD_MESSAGE_CALLBACK,
  } as const
}

export const addNewMessageText = (newMessageText: string) => {
  return {
    type: ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT_CALLBACK,
    payload: {
      newMessageText
    },
  } as const
}

// UsersPage

export const follow = (userId: number) => {
  return {
    type: ACTIONS_TYPE.FOLLOW_CALLBACK,
    payload: {
      userId
    },
  } as const
}

export const unfollow = (userId: number) => {
  return {
    type: ACTIONS_TYPE.UNFOLLOW_CALLBACK,
    payload: {
      userId
    },
  } as const
}

export const setUsers = (users: UsersType[]) => {
  return {
    type: ACTIONS_TYPE.SET_USERS,
    users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: ACTIONS_TYPE.SET_CURRENT_PAGE,
    payload: {
      currentPage
    },
  } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: ACTIONS_TYPE.SET_TOTAL_USER_COUNT,
    payload: {
      totalUsersCount
    },
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    payload: {
      isFetching
    }
  } as const
}

export const toggleIsFollowingProgress = (userId: number, isFetching: boolean) => {
  return {
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {
      userId,
      isFetching
    }
  } as const
}

export type ActionsTypes = ReturnType<typeof addPost>
  | ReturnType<typeof addMessage>
  | ReturnType<typeof addNewMessageText>
  | ReturnType<typeof addNewPostText>
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleIsFollowingProgress>