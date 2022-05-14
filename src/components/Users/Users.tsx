import React from 'react';
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";

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
      <div className={s.pagination}>
        {arrayPages.map(page => {
          return <span
            className={props.currentPage === page ? s.active : ''}
            key={page}
            onClick={() => props.setCurrentPage(page)}
          >{page}-</span>
        })}
      </div>
      {props.users.map(user => {
        return <div key={user.id} className={s.user}>
          <div className={s.userAvatar}>
            <img alt={'avatar'} src={user.photos.small ? user.photos.small : avatar}/>
            {user.followed
              ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>
              : <button onClick={() => props.follow(user.id)}>follow</button>}
          </div>
          <div className={s.userData}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
          </div>
        </div>
      })}
      <button
        // onClick={this.getUsers}
      >show more
      </button>
    </div>
  );
};