import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("");

  const filteredMovies = movies.filter(
    (movie) => movie.title.toLowerCase().includes(searchTerms.toLowerCase())
    //When the search box is empty, the condition becomes .includes("").
    //Since an empty string is considered present in every title,
    //the check returns true for all movies. Hence, every movies are shown.
  );

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch("https://fooapi.com/api/movies");
      const data = await res.json();
      setMovies(data.data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="h-screen grid place-items-center">
        <img
          src="/LoadingAnimation.svg"
          alt="Loading..."
          className="w-25 h-25"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="w-screen grid place-items-end">
        <input
          placeholder="Search Movies.."
          className="mx-12 border-2 rounded-2xl px-3 py-2 align-middle "
          type="text"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.title}
            director={movie.director}
            image={movie.poster}
            rating={movie.imdbRating}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
