import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Sidebar />
      </div>
    </div>
    
  );
}

export default App;
