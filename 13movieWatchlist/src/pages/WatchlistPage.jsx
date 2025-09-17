import MovieCard from "../components/MovieCard";
import { useWatchlistMovies } from "../contexts/WatchlistContext";

function WatchlistPage() {
  const { watchlistMovies } = useWatchlistMovies();
  return (
    <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
      {watchlistMovies.map((watchlistMovie) => (
        <div
          key={watchlistMovie.id}
        >
          <MovieCard
            id={watchlistMovie.id}
            name={watchlistMovie.name}
            director={watchlistMovie.director}
            image={watchlistMovie.image}
            rating={watchlistMovie.rating}
            movie={watchlistMovie}
          />
        </div>
      ))}
    </div>
  );
}

export default WatchlistPage;
