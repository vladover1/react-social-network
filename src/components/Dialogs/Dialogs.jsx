import React from 'react';
import classes from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = ({store}) => {

    let state = store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (evt) => {
        let body = evt.target.value
        store.dispatch(updateNewMessageBodyCreator(body))
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