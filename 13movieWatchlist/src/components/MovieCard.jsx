import { useEffect, useState } from "react";
import { useWatchlistMovies } from "../contexts/WatchlistContext";


// MovieCard.jsx
function MovieCard({ id, name, director, image, rating }) {
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const { addWatchlistMovies, removeWatchlistMovies } = useWatchlistMovies( );

  const handleAdd = () => {
    setAddedToWatchlist(!addedToWatchlist);
    addWatchlistMovies({ id, name, director, image, rating });
  };

  const handleRemove = () => {
    setAddedToWatchlist(!addedToWatchlist);
    removeWatchlistMovies(id);
  };

  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="mt-3" style={{ fontFamily: "poppins" }}>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">Directed by: {director}</p>
        <p className="text-yellow-500 font-semibold">⭐ {rating}/10</p>
        {addedToWatchlist ? (
          <button
            className="w-full bg-green-400 text-white rounded-[8px] my-2 py-2 hover:bg-green-300"
            onClick={handleRemove}
          >
            Added to Watchlist
          </button>
        ) : (
          <button
            className="w-full bg-blue-400 text-white rounded-[8px] my-2 py-2 hover:bg-blue-300"
            onClick={handleAdd}
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
