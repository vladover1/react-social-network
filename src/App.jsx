import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App({store}) {
    return (
      <div className={classes.wrapper}>
        <Header/>
        <Navbar/>
        <div className={classes.wrapper__content}>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/profile/*" element={<Profile/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
