import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {ActionsTypes, addMessageAC, addNewMessageTextAC} from "../../redux/action";

type DialogsPropsType = DialogsPageType & {
  dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  const messageElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addMessage = () => {
    props.dispatch(addMessageAC(props.newMessageText))
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(addNewMessageTextAC(e.currentTarget.value))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
          <button onClick={addMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};
