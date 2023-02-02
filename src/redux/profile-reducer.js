import {userApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 1},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'let`s go to the moon', likesCount: 10},
        {id: 4, message: 'Nuh', likesCount: 14},
    ],
    newPostText: 'Print some text',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {...state , posts: [...state.posts , {id: 5, message: state.newPostText, likesCount: 0}], newPostText: '' }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    userApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer