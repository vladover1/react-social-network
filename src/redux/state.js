import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 1},
                {id: 2, message: 'It is my first post', likesCount: 7},
                {id: 3, message: 'let`s go to the moon', likesCount: 10},
                {id: 4, message: 'Nuh', likesCount: 14},
            ],
            newPostText: 'Print some text'
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }

}

export default store