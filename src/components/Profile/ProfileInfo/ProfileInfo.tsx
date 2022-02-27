import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img alt={'img'} src={'https://i.ytimg.com/vi/C9D-uXKzvPY/maxresdefault.jpg'}/>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};