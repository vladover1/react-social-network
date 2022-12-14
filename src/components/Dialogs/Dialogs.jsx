import React from 'react';
import classes from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({updateNewMessageBody, sendMessage , dialogsPage}) => {

    let dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)
    let newMessageBody = dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        sendMessage()
    }

    let onNewMessageChange = (evt) => {
        let body = evt.target.value
        updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={classes.dialogs__messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;