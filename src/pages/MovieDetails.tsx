import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Movie = {
  title: string;
  year: number;
  imdb: string;
  genre: string[];
  poster: string;
};

export default function MovieDetails() {
  const { title } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovie();
  }, [title]);

  const fetchMovie = async () => {
    try {
      const res = await fetch("/movies.json");
      const data = await res.json();
      const foundMovie = data.movies.find((m: Movie) => m.title === title);
      setMovie(foundMovie || null);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  if (!movie) {
    return (
      <div className="text-black text-center p-6">
        <p>Movie not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-black">
      <img src={movie.poster} alt={movie.title} className="w-full h-80 object-cover rounded-md" />
      <h2 className="text-3xl font-bold mt-4">
        {movie.title} ({movie.year})
      </h2>
      <p className="text-gray-400">IMDb: {movie.imdb}</p>
      <p className="mt-2">
        <strong>Genres:</strong> {movie.genre.join(", ")}
      </p>
    </div>
  );
}
