import {ACTIONS_TYPE, ActionsTypes} from "./action";

// export type UsersType = {
//   id: string
//   avatar: string
//   name: string
//   status: string
//   followed: boolean
//   location: LocationType
// }

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

// export type LocationType = {
//   city: string
//   country: string
// }

export type UsersPageType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
  switch (action.type) {

    case ACTIONS_TYPE.FOLLOW_CALLBACK:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userId? {...user, followed: true} : user)
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

    default:
      return state
  }
}