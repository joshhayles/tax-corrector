import React, {useEffect, useState} from 'react'
import './App.css';
import SignUp from './SignUp'
import Login from './Login'
import NavBar from './NavBar'
//import Welcome from './Welcome'
import { Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user) {
      fetch('/me').then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
    }
  }, [])

  if (!user) {
    return <Login onLogin={setUser} />
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <Welcome /> */}
      
      <div>
      <h2>Welcome, {user.username}!</h2>
      <NavBar setUser={setUser}/> 
      </div>

      <Switch>
        <Route path='/signup'>
      <SignUp onLogin={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//background-color: #282c34;