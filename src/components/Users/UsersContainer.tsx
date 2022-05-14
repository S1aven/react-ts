import {connect} from "react-redux";
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
import React from "react";
import axios from "axios";
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  follow = (userId: number) => {
    this.props.follow(userId);
  };

  unfollow = (userId: number) => {
    this.props.unfollow(userId);
  };

  setCurrentPage = (currentPage: number) => {
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        follow={this.follow}
        unfollow={this.unfollow}
        setCurrentPage={this.setCurrentPage}
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
      />
    );
  }
}

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

export default connect(MapStateToProps, MapDispatchToProps)(UsersContainer)
