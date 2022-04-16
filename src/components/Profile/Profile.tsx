import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
  store: ReduxStoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};