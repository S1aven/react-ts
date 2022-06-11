import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (currentPage: number) => void
  users: UsersType[]
  totalUsersCount: number
  pageSize: number
  currentPage: number
}

export const Users: React.FC<PropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let arrayPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrayPages.push(i);
  }

  const avatar = 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150'

  return (
    <div className={s.users}>
      {props.users.map(user => {
        return <div key={user.id} className={s.user}>
          <div className={s.userAvatar}>
            <NavLink to={'/profile/' + user.id}>
              <img alt={'avatar'} src={user.photos.small ? user.photos.small : avatar}/>
            </NavLink>
            {user.followed
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '46ac2503-764a-427f-92d6-a93aac9de646'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(user.id)
                    }
                  });
              }}>unfollow</button>
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '46ac2503-764a-427f-92d6-a93aac9de646'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(user.id)
                    }
                  });
              }}>follow</button>}
          </div>
          <div className={s.userData}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
          </div>
        </div>
      })}
      <div className={s.pagination}>
        {arrayPages.map(page => {
          return <span
            className={props.currentPage === page ? s.active : ''}
            key={page}
            onClick={() => props.setCurrentPage(page)}
          >{page}-</span>
        })}
      </div>
      <button
        // onClick={this.getUsers}
      >show more
      </button>
    </div>
  );
};