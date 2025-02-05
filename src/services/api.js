const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
/*
    This is a simple api service that uses the TMDB API to get popular movies and search for movies.
    The API key is stored in the .env.local file and is accessed using the import.meta.env.VITE_TMDB_API_KEY variable.
    The BASE_URL is the base url for the TMDB API.

    We create a JS file in a services folder to handle the api calls. this is to keep the code clean and modular.
    Functions need to be async because we are using the fetch api which returns a promise.
    A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}