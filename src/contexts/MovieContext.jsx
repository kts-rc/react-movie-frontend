import {createContext, useState, useContext, useEffect} from "react"
/*
Context passing is basically a fancy way of passing session state data between components.
Instead of declaring a state in very high level component, we can create a jsx file in a contexts folder and wrap the components that need the state in a provider.
This is an example of how to use context sharing from a parent component to a child component.

We create a context object using the createContext function. This is an example of how to use context sharing from a parent component to a child component.
We create a custom hook using the useContext function. This is an example of how to use context sharing from a parent component to a child component.
We create a provider component that wraps the components that need the state. 
*/
const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(favorites)
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

