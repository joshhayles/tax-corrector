import * as React from 'react';
import NavBar from './NavBar'
import Login from './Login'
import { useEffect, useState } from 'react'
import HouseCard from './HouseCard'
import UserForm from './UserForm'

function Dashboard({user, setUser}) {
const [comps, setComps] = useState([])

useEffect(() => {
    fetch('/comps')
    .then((r) => r.json())
    .then(setComps)
}, [])

//console.log(comps)



return (
    <>
    <h2>Welcome, {user.username}!</h2>

    <NavBar user={user} setUser={setUser}/>

    <h3>Update Your Home below to generate the best COMPS for protesting your property taxes!</h3>

    <UserForm />
    
    </>
)

}

export default Dashboard
