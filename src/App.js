import React from 'react';
import './App.css'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' Component={Dialogs} />
          <Route path='/profile' Component={Profile} />
          <Route path='/news' Component={Profile} />
          <Route path='/music' Component={Profile} />
          <Route path='/settings' Component={Profile} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
