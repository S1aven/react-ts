import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {UsersType} from "../../redux/users-reducer";
import {
  follow, unfollow, toggleIsFollowingProgress, getUsers, getCurrentPage
} from "../../redux/action-thunk";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  getCurrentPage = (currentPage: number) => {
    this.props.getCurrentPage(currentPage, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching
          ? <Preloader/>
          : <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            getCurrentPage={this.getCurrentPage}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}
          />
        }
      </>
    );
  }
}

type MapStateToPropsType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  toggleIsFollowingProgress: (userId: number, isFetching: boolean) => void
  getUsers: (currentPage: number, pageSize: number) => void
  getCurrentPage: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(MapStateToProps, {
  follow,
  unfollow,
  toggleIsFollowingProgress,
  getUsers,
  getCurrentPage,
})(UsersContainer)
