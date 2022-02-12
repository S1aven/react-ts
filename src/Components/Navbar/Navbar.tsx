import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={"/profile"}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/dialogs'}>Messages</NavLink>
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