import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";

export const Users: React.FC<UsersPropsType> = (props) => {

  const follow = (userId: string) => {
    props.follow(userId)
  }

  const unfollow = (userId: string) => {
    props.unfollow(userId)
  }

  const setUsers = () => {
    props.setUsers([
      {
        id: v1(),
        avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
        followed: true,
        name: 'Sergei',
        status: 'I am a boss',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: v1(),
        avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
        followed: false,
        name: 'Petr',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: v1(),
        avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
        followed: true,
        name: 'Ivan',
        status: 'I am a boss',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
    ])
  }

  if(props.users.length === 0) {
    props.setUsers([
        {
          id: v1(),
          avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
          followed: true,
          name: 'Sergei',
          status: 'I am a boss',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: v1(),
          avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
          followed: false,
          name: 'Petr',
          status: 'I am a boss',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: v1(),
          avatar: 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150',
          followed: true,
          name: 'Ivan',
          status: 'I am a boss',
          location: {city: 'Kiev', country: 'Ukraine'}
        },
      ]
    )
  }

  return (
    <div className={s.users}>
      {props.users.map(user => {
        return <div key={user.id} className={s.user}>
          <div className={s.userAvatar}>
            <img alt={'avatar'} src={user.avatar}/>
            {user.followed
              ? <button onClick={() => unfollow(user.id)}>unfollow</button>
              : <button onClick={() => follow(user.id)}>follow</button>}
          </div>
          <div className={s.userData}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </div>
          </div>
        </div>
      })}
      <button onClick={setUsers}>show more</button>
    </div>
  );
};