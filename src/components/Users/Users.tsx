import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export class Users extends React.Component<UsersPropsType, UsersPropsType> {

  constructor(props: UsersPropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  avatar = 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150'

  follow = (userId: number) => {
    this.props.follow(userId)
  }

  unfollow = (userId: number) => {
    this.props.unfollow(userId)
  }

  render() {
    return (
      <div className={s.users}>
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
        >show more</button>
      </div>
    );
  }
}

// export const Users: React.FC<UsersPropsType> = (props) => {
//
//   const avatar = 'https://avatars.mds.yandex.net/i?id=c6aff9195dcb3b2ece8089da6e422a15-5528343-images-thumbs&ref=rim&n=33&w=150&h=150'
//
//   const follow = (userId: number) => {
//     props.follow(userId)
//   }
//
//   const unfollow = (userId: number) => {
//     props.unfollow(userId)
//   }
//
//   const getUsers = () => {
//     if(props.users.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
//         props.setUsers(response.data.items)
//       })
//     }
//   }
//
//   return (
//     <div className={s.users}>
//       <button onClick={getUsers}>GetUsers</button>
//       {props.users.map(user => {
//         return <div key={user.id} className={s.user}>
//           <div className={s.userAvatar}>
//             <img alt={'avatar'} src={user.photos.small ? user.photos.small : avatar}/>
//             {user.followed
//               ? <button onClick={() => unfollow(user.id)}>unfollow</button>
//               : <button onClick={() => follow(user.id)}>follow</button>}
//           </div>
//           <div className={s.userData}>
//             <div>
//               <div>{user.name}</div>
//               <div>{user.status}</div>
//             </div>
//             {/*<div>*/}
//             {/*  <div>{user.location.city}</div>*/}
//             {/*  <div>{user.location.country}</div>*/}
//             {/*</div>*/}
//           </div>
//         </div>
//       })}
//       <button onClick={getUsers}>show more</button>
//     </div>
//   );
// };