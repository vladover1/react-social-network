import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postsData}) => {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts postsData = {postsData} />
    </div>
    );
};

export default Profile;