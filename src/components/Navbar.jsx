import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { FavoriteContext } from "../context/FavoriteContext";
import "../styles/Navbar.css";

function Navbar() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          🎬 MovieVerse
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                🏠 Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                ❤️ Favorites ({favorites.length})
              </NavLink>
            </li>

            <li className="nav-item ms-3">
              <ThemeToggle />
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;