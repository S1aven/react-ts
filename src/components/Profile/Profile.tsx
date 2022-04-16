import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/profile-reducer";
import {ActionsTypes} from "../../redux/action";

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};