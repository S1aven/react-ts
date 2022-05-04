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
}

const initialState: UsersPageType = {
  users: [

  ],
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
        users: [...state.users, ...action.users]
      }

    default:
      return state
  }
}