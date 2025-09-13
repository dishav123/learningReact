import { createContext, useContext } from "react";

export const WatchlistContext = createContext({
  watchlistMovies: [{ id: "", name: "", director: "", image: "", rating: "" }],
  addWatchlistMovies: () => {},
  removeWatchlistMovies: () => {},
  checkAddedToWatchlist:(id)=>{}
});

export const useWatchlistMovies = () => {
  return useContext(WatchlistContext);
};

export const WatchlistProvider = WatchlistContext.Provider;
