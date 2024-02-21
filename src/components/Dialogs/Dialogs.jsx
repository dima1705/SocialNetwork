import React from "react";
import c from './Dialogs.module.css';

import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsEl = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesEl = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsEl} 

            </div>
            <div className={c.messages}>
                {messagesEl}

            </div>
        </div>
    )
}

export default Dialogs