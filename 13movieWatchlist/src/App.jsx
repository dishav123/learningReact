import { useEffect, useState } from "react";
import Layout from "../Layout";
import "./App.css";
import { WatchlistProvider } from "./contexts/WatchlistContext";

function App() {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  const addWatchlistMovies = (movie) => {
    console.log("movie added", movie);
    setWatchlistMovies((prev) => [...prev, movie]);
  };

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
      <Layout />
    </WatchlistProvider>
  );
}

export default App;
