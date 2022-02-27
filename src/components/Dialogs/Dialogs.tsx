import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = DialogsPageType & {
  addMessageCallback: (messageText: string) => void
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {

  const dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  const messageElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const newMessageElement = React.createRef<HTMLTextAreaElement>()

  const addMessage = () => {
    if(newMessageElement.current) {
      props.addMessageCallback(newMessageElement.current.value)
    }
  }
  console.log(props.messages)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};
