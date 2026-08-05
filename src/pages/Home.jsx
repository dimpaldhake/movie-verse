import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Toast from "../components/Toast";
import { searchMovies } from "../services/api";
import "../styles/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  const [toast, setToast] = useState("");
  const [history, setHistory] = useState([]);

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = async (movieName, currentPage = 1) => {
    if (!movieName.trim()) {
      setMovies([]);
      setError("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError("");

    const data = await searchMovies(movieName, currentPage);

    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(Number(data.totalResults));
      setSearchTerm(movieName);
      setPage(currentPage);

      setHistory((prev) => {
        const updated = [
          movieName,
          ...prev.filter(
            (item) =>
              item.toLowerCase() !== movieName.toLowerCase()
          ),
        ];

        return updated.slice(0, 5);
      });
    } else {
      setMovies([]);
      setTotalResults(0);
      setError(data.Error);
    }

    setLoading(false);
  };

  const filteredMovies = movies
    .filter((movie) => {
      if (typeFilter === "all") return true;
      return movie.Type === typeFilter;
    })
    .sort((a, b) => {
      const yearA = parseInt(a.Year) || 0;
      const yearB = parseInt(b.Year) || 0;

      if (sortOrder === "newest") {
        return yearB - yearA;
      }

      if (sortOrder === "oldest") {
        return yearA - yearB;
      }

      return 0;
    });

  return (
    <div>
      <div className="container mt-4">

        {/* Hero */}
        <div className="hero">
          <h1>🎬 MovieVerse</h1>
          <p>Discover millions of movies with a single search.</p>
        </div>

        {/* Search */}
        <SearchBar
          onSearch={handleSearch}
          history={history}
        />

        {/* Filter */}
        <div className="d-flex justify-content-center gap-2 mt-3 mb-4 flex-wrap">

          <button
            className={
              typeFilter === "all"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() => setTypeFilter("all")}
          >
            All
          </button>

          <button
            className={
              typeFilter === "movie"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() => setTypeFilter("movie")}
          >
            🎬 Movie
          </button>

          <button
            className={
              typeFilter === "series"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() => setTypeFilter("series")}
          >
            📺 Series
          </button>

          <button
            className={
              typeFilter === "episode"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() => setTypeFilter("episode")}
          >
            🎥 Episode
          </button>

        </div>

        {/* Sort */}
        <div className="d-flex justify-content-end mb-4">
          <select
            className="form-select w-auto"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Loader */}
        {loading && <Loader />}

        {/* Error */}
        {!loading && error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {/* Initial Message */}
        {!loading &&
          !error &&
          movies.length === 0 && (
            <h4 className="text-center text-muted mt-5">
              🎬 Search your favourite movie
            </h4>
          )}

        {/* Total Results */}
        {!loading &&
          filteredMovies.length > 0 && (
            <h5 className="mb-4">
              Found {filteredMovies.length} Movies
            </h5>
          )}

        {/* Movie Cards */}
        <div className="row">

          {filteredMovies.map((movie) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-4"
              key={movie.imdbID}
            >
              <MovieCard
                movie={movie}
                setToast={setToast}
              />
            </div>
          ))}

        </div>

        {/* Pagination */}
        {movies.length > 0 && (
          <Pagination
            page={page}
            totalResults={totalResults}
            onPrevious={() =>
              handleSearch(searchTerm, page - 1)
            }
            onNext={() =>
              handleSearch(searchTerm, page + 1)
            }
          />
        )}

      </div>

      <Toast message={toast} />
    </div>
  );
}

export default Home;