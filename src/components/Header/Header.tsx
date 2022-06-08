import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
  isAuth: boolean
  login: string | null
}

export const Header = ({isAuth, login}: PropsType) => {
  return (
    <header className={s.header}>
      <img
        src={'https://res.cloudinary.com/moteefe/image/upload/v1555093947/store/logo_image/31d7f5bb-82de-43b4-bc3a-c55b5451315d.jpg'}/>
      <div className={s.loadingBlock}>
        {
          isAuth
            ? <div>{login}</div>
            : <NavLink to={'/login'}>LOGIN</NavLink>
        }
      </div>
    </header>
  );
};
