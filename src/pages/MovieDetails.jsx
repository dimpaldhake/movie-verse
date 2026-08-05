import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import "../styles/MovieDetails.css";

function MovieDetails() {
  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError("");

      const data = await getMovieDetails(imdbID);

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error);
      }

      setLoading(false);
    }

    fetchMovie();
  }, [imdbID]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>

        <Link to="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <Link to="/" className="btn btn-secondary back-btn">
        ← Back
      </Link>

      <div className="card details-card p-4">

        <div className="row align-items-center">

          <div className="col-lg-4 text-center">

            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/400x600?text=No+Image"
              }
              alt={movie.Title}
              className="details-poster"
            />

          </div>

          <div className="col-lg-8 details-info">

            <h1 className="details-title">
              {movie.Title}
            </h1>

            <p className="rating">
              ⭐ IMDb Rating: {movie.imdbRating}
            </p>

            <hr />

            <p><strong>🎬 Year:</strong> {movie.Year}</p>

            <p><strong>🎭 Genre:</strong> {movie.Genre}</p>

            <p><strong>⏳ Runtime:</strong> {movie.Runtime}</p>

            <p><strong>📅 Released:</strong> {movie.Released}</p>

            <p><strong>🎥 Director:</strong> {movie.Director}</p>

            <p><strong>✍ Writer:</strong> {movie.Writer}</p>

            <p><strong>👨‍🎤 Actors:</strong> {movie.Actors}</p>

            <p><strong>🌍 Language:</strong> {movie.Language}</p>

            <p><strong>🏆 Awards:</strong> {movie.Awards}</p>

            <p><strong>💰 Box Office:</strong> {movie.BoxOffice}</p>

            <h4 className="mt-4">
              📖 Plot
            </h4>

            <p>{movie.Plot}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;