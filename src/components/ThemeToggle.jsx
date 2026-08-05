import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Theme.css";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-outline-light theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;