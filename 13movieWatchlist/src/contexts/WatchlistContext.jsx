import { createContext, useContext } from "react";

export const WatchlistContext = createContext({
  watchlistMovies: [{ id: "", name: "", director: "", image: "", rating: "" }],
  addWatchlistMovies: () => {},
  removeWatchlistMovies: () => {},
});

export const useWatchlistMovies = () => {
  return useContext(WatchlistContext);
};

export const WatchlistProvider = WatchlistContext.Provider;
