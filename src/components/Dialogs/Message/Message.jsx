import React from "react";
import c from './../Dialogs.module.css';


const Message = (props) => {

    return (
        <div className={c.dialog}>
            <div>
                {props.message}
            </div>         
        </div>
    )
}

export default Message