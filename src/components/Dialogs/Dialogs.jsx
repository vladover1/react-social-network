import React from 'react';
import classes from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({state}) => {

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={classes.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;