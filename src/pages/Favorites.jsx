import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

/*
    This is a simple page that displays the favorite movies.
    It uses the useMovieContext hook to get the favorites from the context. This hook is created in the MovieContext.jsx file. This is an example of how to use context sharing from a parent component to a child component.
    We are checking if there are any entries in the favorites array. If there are, we display them in a grid. If there are no favorites, we display a message saying so.
    If there are no favorites, it displays a message saying so.
    If there are favorites, it displays them in a grid.
*/

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;