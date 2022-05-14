import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootState} from "../../redux/redux-store";
import {UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/action";

type MapStateToPropsType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UsersType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  // setUsers: () => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setCurrentPage: (currentPage) => {
     dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
     dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
