import React from 'react';
import './App.css';

import GridIcons from './GridIcons/GridIcons';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import HeaderChat from './HeaderChat/HeaderChat';
import HeaderUserList from './HeaderUserList/HeaderUserList';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header/>
      <HeaderUserList/>
      <HeaderChat/>
      <Main/>
    </div>
  );
}

export default App;
