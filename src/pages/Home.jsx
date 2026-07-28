import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (movieName) => {

  setError("");

  const data = await searchMovies(movieName);

  if (data.Response === "True") {
    setMovies(data.Search);
  } else {
    setMovies([]);
    setError(data.Error);
  }

};

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="container mt-4">
        {error && (
    <div className="alert alert-danger">
      {error}
    </div>
  )}
        <div className="row">

          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;