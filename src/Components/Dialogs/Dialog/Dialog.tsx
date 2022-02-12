import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
  name: string
  id: number
}

export const Dialog: React.FC<DialogPropsType> = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

