import MovieCard from "../components/MovieCard";
import { useWatchlistMovies } from "../contexts/WatchlistContext";

function WatchlistPage() {
  const { watchlistMovies } = useWatchlistMovies();
  return (
    <div>
      {watchlistMovies.map((watchlistMovie) => {
        <div key={watchlistMovie.id}>
          <MovieCard
            id={watchlistMovie.id}
            name={watchlistMovie.name}
            director={watchlistMovie.director}
            image={watchlistMovie.image}
            rating={watchlistMovie.rating}
          />
        </div>;
      })}
    </div>
  );
}

export default WatchlistPage;
