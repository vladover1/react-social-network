import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/users-alt.jpg";

const Users = ({users, currentPage, unfollow, follow, onPageChanged}) => {

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
                    <div>
                        <img alt='user avatar' src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                follow(u.id)
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