import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";

type PropsType = {
  profile: null | ProfileType
}

export const ProfileInfo = (props: PropsType) => {

  if (!props.profile?.photos.large) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img alt={'img'} src={'https://i.ytimg.com/vi/C9D-uXKzvPY/maxresdefault.jpg'}/>
      </div>
      <div className={s.descriptionBlock}>
        <img alt={'photo'} src={props.profile?.photos.large}/>
        <div>{props.profile.fullName} </div>
        <div>{props.profile.aboutMe} </div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};