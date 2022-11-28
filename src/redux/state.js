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
        }
    },
    getState() {return this._state},
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}

    this._state.profilePage.posts.push(newPost)

    this._state.profilePage.newPostText = ''

    this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText

        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store