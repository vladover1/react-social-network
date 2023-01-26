import React from 'react';
import classes from './Users.module.scss'
import axios from "axios";
import userPhoto from "../../assets/images/users-alt.jpg"

const Users = ({users, follow, unfollow, setUsers}) => {
    let getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="user avatar"/>
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
                        <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>)}
    </div>;
};

export default Users;