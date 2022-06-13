import {ACTIONS_TYPE, ActionsTypes} from "./action";

export type UsersType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: Photos
  status: string | null
  followed: boolean
}

export type Photos = {
  small: string | undefined
  large: string | undefined
}

export type UsersPageType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
  switch (action.type) {

    case ACTIONS_TYPE.FOLLOW_CALLBACK:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
      }

    case ACTIONS_TYPE.UNFOLLOW_CALLBACK:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
      }

    case ACTIONS_TYPE.SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case ACTIONS_TYPE.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage
      }

    case ACTIONS_TYPE.SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount
      }

    case ACTIONS_TYPE.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    case ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(userId => userId !== action.payload.userId)
      }

    default:
      return state
  }
}