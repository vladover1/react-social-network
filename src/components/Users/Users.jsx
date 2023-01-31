import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/users-alt.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = ({users, currentPage, unfollow, follow, onPageChanged, toggleFollowingProgress, followingInProgress}) => {

    // let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && classes.selectedPage}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt='user avatar' src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={classes.userPhoto}/>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {'API-KEY': '49b589f4-f11c-47bc-8f88-7b2bd65e96a1'}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            unfollow(u.id)
                                        }
                                        toggleFollowingProgress(false, u.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': '49b589f4-f11c-47bc-8f88-7b2bd65e96a1'}
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        follow(u.id)
                                    }
                                    toggleFollowingProgress(false, u.id)
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users