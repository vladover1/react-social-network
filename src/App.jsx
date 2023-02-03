import React from 'react';
import classes from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";


function App() {
    return (
        <div className={classes.wrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={classes.wrapper__content}>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/*" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
