import React from 'react'
import CompsCard from './CompsCard'

function CompsContainer({user, comps}) {

    return (
        <>
        { comps.map(comp => <CompsCard
            comp={comp}
            key={comp.id}
            user={user}
            /> )}
        </>
    )
}

export default CompsContainer