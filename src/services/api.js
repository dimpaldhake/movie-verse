const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(movieName, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${movieName}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { Response: "False", Error: "Something went wrong" };
  }
}

export async function getMovieDetails(imdbID) {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { Response: "False", Error: "Something went wrong" };
  }
}