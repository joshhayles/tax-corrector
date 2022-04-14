import React from 'react'
import UserHouseCard from './UserHouseCard'

function MyComps({user}) {

    return (
        <>
        <UserHouseCard 
        user={user}/>
        </>
    )
}

export default MyComps