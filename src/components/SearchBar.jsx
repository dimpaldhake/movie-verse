import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    onSearch(search);
  };

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
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;