import * as React from 'react';
import NavBar from './NavBar'
import Login from './Login'


function Welcome({user, setUser}) {
    if (!user) {
        return <Login onLogin={setUser} />
    }

return (
    <>
    <h2>Welcome, {user.username}!</h2>
    <NavBar />
    </>
)

}

export default Welcome
