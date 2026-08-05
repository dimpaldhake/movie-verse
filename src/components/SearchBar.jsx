import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
function SearchBar({ onSearch, history }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
  if (!search.trim()) return;

  const timer = setTimeout(() => {
    onSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);

  const handleSearch = () => {
    if (!search.trim()) return;

    onSearch(search);
  };
  useEffect(() => {
  const fetchSuggestions = async () => {
    if (search.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    const data = await searchMovies(search);

    if (data.Response === "True") {
      setSuggestions(data.Search.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const timer = setTimeout(fetchSuggestions, 400);

  return () => clearTimeout(timer);
}, [search]);

  return (
    <div className="container mt-4">

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search your favorite movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className="btn btn-success"
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>
      {suggestions.length > 0 && (
  <div className="list-group mt-2">
    {suggestions.map((movie) => (
      <button
        key={movie.imdbID}
        className="list-group-item list-group-item-action"
        onClick={() => {
          setSearch(movie.Title);
          onSearch(movie.Title);
          setSuggestions([]);
        }}
      >
        {movie.Title} ({movie.Year})
      </button>
    ))}
  </div>
)}

      {history.length > 0 && (
        <div className="mt-3">
          <h6>Recent Searches</h6>

          <div className="d-flex flex-wrap gap-2">
            {history.map((item, index) => (
              <button
                key={index}
                className="btn btn-outline-secondary btn-sm"
                onClick={() => {
                  setSearch(item);
                  onSearch(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default SearchBar;