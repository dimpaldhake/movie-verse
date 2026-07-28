function MovieCard({ movie }) {
  return (
    <div className="card h-100 shadow">

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x450?text=No+Image"
        }
        className="card-img-top"
        alt={movie.Title}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="card-title">{movie.Title}</h5>

        <p className="card-text">
          <strong>Year:</strong> {movie.Year}
        </p>

        <p className="card-text">
          <strong>Type:</strong> {movie.Type}
        </p>

        <button className="btn btn-primary mt-auto">
          View Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;