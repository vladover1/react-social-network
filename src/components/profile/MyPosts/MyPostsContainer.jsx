import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = ({store}) => {

    let state = store.getState()

    console.log(store.getState())


    let addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
       store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText ={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText ={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer ;