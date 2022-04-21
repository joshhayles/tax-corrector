import React, { useEffect, useState } from 'react'
import FavoritesCard from './FavoritesCard'


function MyComps({user}) {
const [favorites, setFavorites] = useState([])

 useEffect(() => {
    fetch('/favorites')
    .then(r => r.json())
    .then(setFavorites)
    console.log(favorites)
 }, [])
    

    return (
        <>
        <h1>Welcome to your Favorites!</h1>
        { favorites.map(favorite => <FavoritesCard
            favorite={favorite}
            key={favorite.id}
            user={user}
            favoriteId={favorite.id}
            setFavorites={setFavorites}
            /> )}
        </>
    )
}

export default MyComps