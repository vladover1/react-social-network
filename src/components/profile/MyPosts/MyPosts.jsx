import React from 'react';
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";


const MyPosts = ({state, addPost}) => {

    let postElements = state.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPosts = () => {
        let text = newPostElement.current.value
        addPost(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div> 
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;