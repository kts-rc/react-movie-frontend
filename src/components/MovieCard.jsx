import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

/*
In this component we are using the custom hook that we prepared in the MovieContext.jsx file.
We had wrapped the components in App.jsx file.
From there now we can access the context ( state variables) from the useMovieContext hook.
We are checking if the movie is already in the favorites array. If it is, we display a heart icon. If it is not, we display an empty heart icon.
We are using the isFavorite function to check if the movie is already in the favorites array.
We are using the addToFavorites function to add the movie to the favorites array.
We are using the removeFromFavorites function to remove the movie from the favorites array.
All these functions are defined in the MovieContext.jsx file.
*/
function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard