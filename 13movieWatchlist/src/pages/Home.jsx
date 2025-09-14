import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerms.toLowerCase()) 
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

  if (loading) return <p>loading movies....</p>;

  return (
    <div>
      <input
        placeholder="Search Movies.."
        className="mx-12 border-2 rounded-2xl px-2 py-1 align-middle "
        type="text"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />

      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.title}
            director={movie.director}
            image={movie.poster}
            rating={movie.imdbRating}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
