import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state, addPost}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state} addPost={addPost}/>
        </div>
    );
};

export default Profile;