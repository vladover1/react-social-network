import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';

function App({postsData, dialogsData, messagesData}) {
  return (
      <div className={classes.wrapper}>
        <Header/>
        <Navbar/>
        <div className={classes.wrapper__content}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />}/>
            <Route path="/profile/*" element={<Profile postsData = {postsData}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
