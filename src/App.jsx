import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
       <ScrollToTopButton />
    </>
  );
}

export default App;