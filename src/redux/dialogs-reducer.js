const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Yara'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'John'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: 'Print your message'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody

            state.messages.push({id: 6, message: body},)
            state.newMessageBody = ''
            return state;
        default:
            return state
    }

    return state
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY,  body:body})


export default dialogsReducer