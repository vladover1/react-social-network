import React from 'react';
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = ({posts, addPost}) => {

    let postElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values) => {
        addPost(values.newPostText)
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

const AddNewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;