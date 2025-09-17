import { useState } from "react";
import { useWatchlistMovies } from "../contexts/WatchlistContext";
import { Link } from "react-router-dom";

function MovieCard({ id, name, director, image, rating, movie }) {
  const { addWatchlistMovies, removeWatchlistMovies, checkAddedToWatchlist } =
    useWatchlistMovies();

  const [addedToWatchlist, setAddedToWatchlist] = useState(
    checkAddedToWatchlist(id)
  );

  const handleAdd = (e) => {
    e.stopPropagation();
    addWatchlistMovies({ id, name, director, image, rating });
    setAddedToWatchlist(true);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    removeWatchlistMovies(id);
    setAddedToWatchlist(false);
  };

  return (
    <div
      className="max-w-sm rounded-2xl shadow-lg p-4 bg-white"
      style={{ fontFamily: "poppins" }}
    >
      <Link to={`/movies/${movie.id}`} state={{ movie }}>
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover rounded-xl"
          />
          <div className="mt-3" style={{ fontFamily: "poppins" }}>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">Directed by: {director}</p>
            <p className="text-yellow-500 font-semibold">⭐ {rating}/10</p>
          </div>
        </div>
      </Link>
      {addedToWatchlist ? (
        <button
          className="w-full bg-red-400 text-white rounded-[8px] my-2 py-2 hover:bg-red-300"
          onClick={handleRemove}
        >
          Remove from Watchlist
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
  );
}

export default MovieCard;
