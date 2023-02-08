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
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id: 6, message: body}]}
        default:
            return state
    }
}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer