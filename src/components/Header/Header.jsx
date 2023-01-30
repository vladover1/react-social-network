import React from 'react';
import classes from './header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://www.designevo.com/res/templates/thumb_small/evil-villain.webp' alt='logo'/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;