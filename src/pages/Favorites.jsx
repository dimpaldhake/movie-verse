import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { FavoriteContext } from "../context/FavoriteContext";
import "../styles/Favorites.css";

function Favorites() {
  const { favorites, removeFavorite } =
    useContext(FavoriteContext);

  return (
    <div className="container mt-4">

      <h2 className="favorite-title">
        ❤️ Favorite Movies ({favorites.length})
      </h2>

      {favorites.length === 0 ? (
        <div className="alert alert-warning favorite-empty">
          <h4>No favorite movies found 😔</h4>
          <p>
            Search movies and add them to your favorites.
          </p>
        </div>
      ) : (
        <div className="row favorite-grid">

          {favorites.map((movie) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-4 favorite-card"
              key={movie.imdbID}
            >
              <MovieCard
                movie={movie}
                isFavoritePage={true}
                onRemove={removeFavorite}
              />
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;