import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch("https://fooapi.com/api/movies");
      const data = await res.json();
      setMovies(data.data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) return <p>loading movies....</p>;

  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard
            id={movie.id}
            name={movie.title}
            director={movie.director}
            image={movie.poster}
            rating={movie.imdbRating}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
