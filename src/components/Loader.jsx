import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <p className="mt-3">Loading movies...</p>
    </div>
  );
}

export default Loader;