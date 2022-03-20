import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageAC, addNewMessageTextAC, DialogsPageType} from "../../redux/state";

type DialogsPropsType = DialogsPageType & {
  // addMessageCallback: (messageText: string) => void
  dispatch: (action: ActionsTypes) => void
  // addNewMessageTextCallback: (newMessageText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  const messageElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const addMessage = () => {
    // props.addMessageCallback(props.newMessageText)
    // props.dispatch({type: "ADD_MESSAGE_CALLBACK", messageText: props.newMessageText})
    props.dispatch(addMessageAC(props.newMessageText))
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // props.addNewMessageTextCallback(e.currentTarget.value)
    // props.dispatch({type: "ADD_NEW_MESSAGE_TEXT_CALLBACK", newMessageText: e.currentTarget.value})
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
