import React from 'react';
import classes from './navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' className={({isActive}) => isActive ? classes.activeLink : ''}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogs' className={({isActive}) => isActive ? classes.activeLink : ''}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to='/users' className={({isActive}) => isActive ? classes.activeLink : ''}>Users</NavLink></div>
            <div className={classes.item}><NavLink to='/music'>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/settings'>Settings</NavLink></div>
        </nav>
    );
};

export default Navbar;