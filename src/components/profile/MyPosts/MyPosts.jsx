import React from 'react';
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = ({posts, addPost, updateNewPostText, newPostText}) => {

    let postElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;