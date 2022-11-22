import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, updateNewPostText}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    );
};

export default Profile;