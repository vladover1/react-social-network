import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state}) => {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts state = {state} />
    </div>
    );
};

export default Profile;