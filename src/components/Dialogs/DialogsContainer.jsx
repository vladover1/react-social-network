import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {

    let state = store.getState().dialogsPage

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    );
};

export default DialogsContainer;