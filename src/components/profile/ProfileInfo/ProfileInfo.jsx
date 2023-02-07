import React from 'react';
import classes from "./Profileinfo.module.scss";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({profile, status , updateStatus}) => {

    if(profile === null){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    className={classes.content__photo}*/}
                {/*    src="https://cdn.corporate.walmart.com/dims4/WMT/f7a8313/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png"*/}
                {/*    alt="background"/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.small} alt='avatar'/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;