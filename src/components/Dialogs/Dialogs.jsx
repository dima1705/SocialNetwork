import React from "react";
import c from './Dialogs.module.css';

import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {

    return (
        <div className={c.dialog}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem id="1" name='Дима' />
                <DialogItem id="2" name='Валера' />
                <DialogItem id="3" name='Андрей' />
                <DialogItem id="4" name='Гриша' />
                <DialogItem id="5" name='Вячеслав' />
                <DialogItem id="6" name='Игорек' />
                <DialogItem id="7" name='Володя' />
                <DialogItem id="8" name='Борис' />

            </div>
            <div className={c.messages}>
                <Message message='Привет, Диме!' />
                <Message message='Привет, Вале! Как дела?' />
                <Message message='Я хорошо, а ты?' />  
                <Message message='Нормально' />

            </div>
        </div>
    )
}

export default Dialogs