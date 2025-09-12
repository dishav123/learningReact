import { createContext, useContext } from "react";

export const WatchlistContext = createContext({
  watchlistMovies: [],
  addWatchlistMovies: () => {},
  removeWatchlistMovies: () => {},
});

export const useWatchlistMovies = () => {
  return useContext(WatchlistContext);
};

export const WatchlistProvider = WatchlistContext.Provider;
