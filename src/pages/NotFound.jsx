import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px" }}
    >
      <h1
        style={{
          fontSize: "100px",
          fontWeight: "bold",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p className="text-muted">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary mt-3"
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;