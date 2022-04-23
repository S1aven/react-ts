import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootState} from "../../redux/redux-store";
import {UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/action";

type MapStateToPropsType = {
  users: UsersType[]
}

type MapDispatchToPropsType = {
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
   follow: (userId) => {
     dispatch(followAC(userId))
   },
    unfollow: (userId) => {
     dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
