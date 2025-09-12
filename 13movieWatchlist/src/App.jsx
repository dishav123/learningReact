import { useEffect, useState } from "react";
import "./App.css";
import { WatchlistProvider } from "./contexts/WatchlistContext";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  const addWatchlistMovies = (movie) => {
    console.log("movie added", movie);
    setWatchlistMovies((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev; // prevent duplicates
      return [...prev, movie];
    });
  };

  useEffect(() => {
    console.log("Updated watchlist:", watchlistMovies);
  }, [watchlistMovies]);

  const removeWatchlistMovies = (id) => {
    setWatchlistMovies((prev) => prev.filter((prevdata) => prevdata.id !== id));
  };

  // Load from localStorage
  useEffect(() => {
    const watchlistLocal = JSON.parse(localStorage.getItem("watchlistMovies"));
    if (watchlistLocal && watchlistLocal.length > 0) {
      setWatchlistMovies(watchlistLocal);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
  }, [watchlistMovies]);

  return (
    <WatchlistProvider
      value={{ watchlistMovies, addWatchlistMovies, removeWatchlistMovies }}
    >
      <div>
        <Navbar />
        <Outlet />
      </div>
    </WatchlistProvider>
  );
}

export default App;
