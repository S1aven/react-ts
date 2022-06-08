import {ACTIONS_TYPE, ActionsTypes} from "./action";

export type initialStateType = typeof initialState;

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_USER_DATA:
      return {
        ...state,
        ...action.payload.data,
        isAuth: true
      }
    default:
      return state
  }
}

