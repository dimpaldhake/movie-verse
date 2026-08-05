import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h4>🎬 MovieVerse</h4>

      <p>Discover your favorite movies anytime.</p>

      <div className="social-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="mailto:example@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>

      </div>

      <p className="copyright">
        © 2026 MovieVerse | Made with ❤️ using React
      </p>

    </footer>
  );
}

export default Footer;