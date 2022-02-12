import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog name={'Dimych'} id={1}/>
        <Dialog name={'Andrey'} id={2}/>
        <Dialog name={'Sveta'} id={3}/>
        <Dialog name={'Sacha'} id={4}/>
        <Dialog name={'Sergei'} id={5}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi'}/>
        <Message message={'How is your it-kamasutra'}/>
        <Message message={'Yo'}/>
      </div>
    </div>
  );
};
