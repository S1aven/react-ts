import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {UsersType} from "../../redux/users-reducer";
import {
  follow, toggleIsFetching,
  setCurrentPage, setTotalUsersCount,
  setUsers, unfollow,
  toggleIsFollowingProgress, getUsers, getCurrentPage
} from "../../redux/action-thunk";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

    // this.props.toggleIsFetching(true);
    //
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //     this.props.toggleIsFetching(false);
    //   });
  };

  // follow = (userId: number) => {
  //   this.props.follow(userId);
  // };
  //
  // unfollow = (userId: number) => {
  //   this.props.unfollow(userId);
  // };

  getCurrentPage = (currentPage: number) => {
    this.props.getCurrentPage(currentPage, this.props.pageSize)

    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(currentPage);
    //
    // usersAPI.getUsers(currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.setUsers(data.items);
    //     this.props.toggleIsFetching(false);
    //   });
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
            // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
  // setUsers: (users: UsersType[]) => void
  // setCurrentPage: (currentPage: number) => void
  // setTotalUsersCount: (totalUsersCount: number) => void
  // toggleIsFetching: (isFetching: boolean) => void
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

// const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//    follow: (userId) => {
//      dispatch(followAC(userId))
//    },
//     unfollow: (userId) => {
//      dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//      dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//      dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(MapStateToProps, {
  follow,
  unfollow,
  // setUsers,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleIsFetching,
  toggleIsFollowingProgress,
  getUsers,
  getCurrentPage,
})(UsersContainer)
