import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import "../styles/MovieCard.css";

function MovieCard({
  movie,
  isFavoritePage = false,
  onRemove,
  setToast,
}) {
  const [favorite, setFavorite] = useState(false);

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(FavoriteContext);

  useEffect(() => {
    setFavorite(
      favorites.some(
        (item) => item.imdbID === movie.imdbID
      )
    );
  }, [favorites, movie.imdbID]);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.imdbID);

      if (setToast) {
        setToast("Removed from Favorites 💔");

        setTimeout(() => {
          setToast("");
        }, 2000);
      }
    } else {
      addFavorite(movie);

      if (setToast) {
        setToast("Added to Favorites ❤️");

        setTimeout(() => {
          setToast("");
        }, 2000);
      }
    }
  };

  return (
    <div className="card h-100 movie-card shadow">

      <div className="position-relative">

        {!isFavoritePage && (
          <button
            className="favorite-icon"
            onClick={toggleFavorite}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        )}

        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/300x450?text=No+Image"
          }
          className="card-img-top"
          alt={movie.Title}
        />

        <span className="badge bg-primary position-absolute top-0 start-0 m-2">
          {movie.Type}
        </span>

      </div>

      <div className="card-body d-flex flex-column">

        <h5 className="card-title">
          {movie.Title}
        </h5>

        <p className="card-text mb-3">
          📅 {movie.Year}
        </p>

        <div className="mt-auto d-grid gap-2">

          <Link
            to={`/movie/${movie.imdbID}`}
            className="btn btn-primary"
          >
            🎬 View Details
          </Link>

          {isFavoritePage && (
            <button
              className="btn btn-danger"
              onClick={() => {
                removeFavorite(movie.imdbID);

                if (onRemove) {
                  onRemove(movie.imdbID);
                }
              }}
            >
              🗑 Remove
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default MovieCard;