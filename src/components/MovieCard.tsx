import { useState } from "react";
import {Link} from 'react-router-dom'
 
type MovieCardProps = {
  movie: {
    title: string;
    year: number;
    genre: string[];
    imdb: number;
    poster: string;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };


  return (
    <div className="border border-gray-800 max-w-xs bg-black text-red-600 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-red-500/50">
      <img 
        src={movie.poster} 
        alt={`${movie.title} poster`} 
        className="w-full object-cover h-60 sm:h-72 md:h-80 transition-opacity duration-300 hover:opacity-90" 
      />
      
      <div className="pt-4 px-4">
        <h2 className="text-lg font-bold text-red-500">
          {movie.title} ({movie.year})
        </h2>
        <p className="text-sm text-gray-300">
          IMDb: <span className="font-semibold">{movie.imdb}</span>
        </p>
      </div>

      <div className="p-4 flex flex-wrap gap-2">
        {movie.genre.map((g, index) => (
          <span 
            key={index} 
            className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full"
          >
            {g}
          </span>
        ))}
      </div>

      <div className="flex">
        <button className="border-2 border-red-900 w-1/2 py-2 font-semibold text-red-500 hover:text-black hover:bg-red-500 transition duration-300 rounded-bl-lg">
        <Link to={`/${movie.title}`} >
          View Details
        </Link>
        </button>
        <button
          onClick={toggleFavorite}
          className={`w-1/2 py-2 font-semibold transition duration-300 rounded-br-lg ${
            isFavorite 
              ? "bg-red-600 text-white border-2 border-red-800" 
              : "border-2 border-red-900 text-red-500 hover:text-black hover:bg-red-500"
          }`}
        >
          {isFavorite ? "Favorited ❤️" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
