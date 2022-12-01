import React from 'react';
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = ({profilePage, dispatch}) => {

    let postElements = profilePage.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;