import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar'
import Feed from './Feed.js'
import Widgets from './Widgets.js'
import Login from './Login.js'
import {useStateValue} from './StateProvide.js'

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? <Login />:(
      <>
      <Header />
      <div className="App__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
      
    </div>
    
  );
}

export default App;
