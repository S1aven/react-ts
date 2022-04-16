import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
  addMessage: () => void
  onMessageChange: (text: string) => void
  dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const dialogElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  const messageElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addMessage = () => {
    props.addMessage()
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onMessageChange(e.currentTarget.value)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
          <button onClick={addMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};
