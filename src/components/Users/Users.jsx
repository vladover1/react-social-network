import React from 'react';
import classes from './Users.module.scss'

const Users = ({users, follow, unfollow, setUsers}) => {

    if (users.length <3 ){
    setUsers([{
        id: 1,
        photoURL: 'https://yt3.googleusercontent.com/ytc/AMLnZu_3irphACShro1kS-x6tx9aItHA2zyDJdcsESdO4A=s900-c-k-c0x00ffffff-no-rj',
        followed: false,
        fullName: 'Vlad O.',
        status: 'i am a boss',
        location: {city: 'Kiev', country: 'Ukraine'}
    }, {
        id: 2,
        photoURL: 'https://yt3.googleusercontent.com/ytc/AMLnZu_3irphACShro1kS-x6tx9aItHA2zyDJdcsESdO4A=s900-c-k-c0x00ffffff-no-rj',
        followed: true,
        fullName: 'Nastya M.',
        status: 'i am a boss too',
        location: {city: 'Kharkiv', country: 'Ukraine'}
    }, {
        id: 3,
        photoURL: 'https://yt3.googleusercontent.com/ytc/AMLnZu_3irphACShro1kS-x6tx9aItHA2zyDJdcsESdO4A=s900-c-k-c0x00ffffff-no-rj',
        followed: false,
        fullName: 'Volodya K.',
        status: 'i am a boss too',
        location: {city: 'Lviv', country: 'Ukraine'}
    },])
    }

    return <div>
        {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photoURL} alt="user avatar"/>
                    </div>
                    <div>
                       {u.followed
                           ? <button onClick={() => unfollow(u.id)}>Followed</button>
                           : <button onClick={() => follow(u.id)}>Unfollowed</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
        </div>)}
    </div>;
};

export default Users;