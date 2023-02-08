import React from 'react';
import classes from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = ({sendMessage, dialogsPage, isAuth}) => {

    let dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                        id={dialog.id}/>)
    let messagesElements = dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
    }

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={classes.dialogs__messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;