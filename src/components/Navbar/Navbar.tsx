import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {

  // const getActive = ({isActive}) => isActive ? s.active : s.item

  return (
    <nav className={s.navbar}>
      <div className={s.item} >
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={"/profile"}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/dialogs'}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/users'}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'@'}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'@'}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'@'}>Settings</NavLink>
      </div>
    </nav>
  );
};