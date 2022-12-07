const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =  {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 1},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'let`s go to the moon', likesCount: 10},
        {id: 4, message: 'Nuh', likesCount: 14},
    ],
        newPostText: 'Print some text'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}

            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer