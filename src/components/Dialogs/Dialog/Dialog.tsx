import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";

type DialogPropsType = DialogType

export const Dialog: React.FC<DialogPropsType> = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

