import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export class Users extends React.Component<UsersPropsType, UsersPropsType> {

  // constructor(props: UsersPropsType) {
  //   super(props);
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
  //     this.props.setUsers(response.data.items)
  //   })
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  avatar = 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150'

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

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let arrayPages = [];
    for (let i = 1; i <= pagesCount; i++) {
      arrayPages.push(i);
    }
    console.log(this.props.totalUsersCount);

    return (
      <div className={s.users}>
        <div className={s.pagination}>
          {arrayPages.map(page => {
            return <span
              className={this.props.currentPage === page ? s.active : ''}
              key={page}
              onClick={() => this.setCurrentPage(page)}
            >{page}-</span>
          })}
        </div>
        {this.props.users.map(user => {
          return <div key={user.id} className={s.user}>
            <div className={s.userAvatar}>
              <img alt={'avatar'} src={user.photos.small ? user.photos.small : this.avatar}/>
              {user.followed
                ? <button onClick={() => this.unfollow(user.id)}>unfollow</button>
                : <button onClick={() => this.follow(user.id)}>follow</button>}
            </div>
            <div className={s.userData}>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              {/*<div>*/}
              {/*  <div>{user.location.city}</div>*/}
              {/*  <div>{user.location.country}</div>*/}
              {/*</div>*/}
            </div>
          </div>
        })}
        <button
          // onClick={this.getUsers}
        >show more
        </button>
      </div>
    );
  }
}