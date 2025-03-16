  import MovieCard from './MovieCard'
  type MovieListProps = {
    movies:{
    title:string,
    year:number,
    genre:string[],
    imdb:number,
    poster:string
    }[],
  }
  export default function MovieList({movies} : MovieListProps) {
    return (
      <>
     <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie,index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
      </>
    )
  }
