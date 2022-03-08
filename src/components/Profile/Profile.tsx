import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPostCallback: (postText: string) => void
  addNewPostTextCallback: (newPostText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPostCallback={props.addPostCallback}
        addNewPostTextCallback={props.addNewPostTextCallback}
      />
    </div>
  );
};