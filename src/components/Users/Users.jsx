import React from 'react';
import classes from './Users.module.scss'
import axios from "axios";
import userPhoto from "../../assets/images/users-alt.jpg"

class Users extends React.Component {

        componentDidMount(){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }


    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="user avatar"/>
                    </div>
                    <div>
                       {u.followed
                           ? <button onClick={() => this.props.unfollow(u.id)}>Followed</button>
                           : <button onClick={() => this.props.follow(u.id)}>Unfollowed</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>;
    }
}

export default Users;