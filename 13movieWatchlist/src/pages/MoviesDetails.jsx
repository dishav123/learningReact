import { useLocation, useParams } from "react-router-dom";

function MoviesDetails() {
  const location = useLocation();
  console.log(location);
  const movie = location.state?.movie;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4"
    style={{ fontFamily:'poppins' }}>
      {/* Poster */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-8 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-900">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-500 italic">
            {movie.genre} · {movie.language}
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-medium">Directed by:</span> {movie.director}
            </p>
            <p>
              <span className="font-medium">Actors:</span> {movie.actors}
            </p>
            <p>
              <span className="font-medium">Rating:</span> ⭐ {movie.imdbRating}
              /10
            </p>
            <p>
              <span className="font-medium">Box Office: </span>
               {movie.boxOffice}
            </p>
            <p>
              <span className="font-medium">Awards:</span> {movie.awards}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Story</h2>
            <p className="text-gray-600 leading-relaxed">{movie.plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
