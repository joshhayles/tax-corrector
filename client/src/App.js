import React, {useEffect, useState} from 'react'
import './App.css';
import SignUp from './SignUp'
import Login from './Login'
import NavBar from './NavBar'
import Auth from './Auth'
import Dashboard from './Dashboard'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, useHistory, Switch} from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // if (!user) {
      fetch('/me').then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
    // }
  }, [])

  if (!user) {
    return <Auth onLogin={setUser} />
  }
  
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Dashboard user={user} setUser={setUser}/>

        <Switch>

        <Route exact path='/dashboard' >
          <Dashboard onLogin={setUser} />
        </Route> 

        {/* <Route exact path='/' >
          <Login onLogin={setUser} /> 
        </Route> */}
      
        </Switch>

    </div>
  );
}

export default App;

//background-color: #282c34;