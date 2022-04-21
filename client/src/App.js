import React, {useEffect, useState} from 'react'
import './App.css';
import NavBar from './NavBar'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { Route, Switch } from 'react-router-dom'
import MyComps from './MyComps'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
      fetch('/me').then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
    
  }, [])

  if (!user) {
    return <Auth onLogin={setUser} />
  }
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <NavBar user={user} setUser={setUser} />
        <Switch>

        <Route exact path='/dashboard' >
        <Dashboard user={user} setUser={setUser}/>
        </Route> 

        <Route exact path='/mycomps' >
          <MyComps onLogin={setUser} user={user} /> 
        </Route> 
      
        </Switch>

    </div>
  );
}

export default App;

//background-color: #282c34;