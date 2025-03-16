import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <Router>
      <Navbar name="MoviesBuzz" links={NavLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:title" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
