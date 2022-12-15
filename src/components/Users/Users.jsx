import React from 'react';
import classes from './Users.module.scss'

const Users = (props) => {
    debugger
    return (<div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} alt=""/>
                    </div>
                    <div>
                        <button>Follow</button>
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
    </div>);
};

export default Users;