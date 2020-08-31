import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar'
import Feed from './Feed.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
    
  );
}

export default App;
