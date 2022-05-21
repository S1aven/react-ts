import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
  profile: null | ProfileType
}

export const Profile= (props: PropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};