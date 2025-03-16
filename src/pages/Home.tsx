import { useEffect, useState } from "react"
import MovieList from "../components/MovieList";
import MovieSlider from "../components/MovieSlider";


export default function Home() {
    const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetchMovies();
  },[])

  const fetchMovies = async()=>{
    try{
    const res = await fetch('/movies.json')
    const data = await res.json();
    console.log("Movies Data",data.movies);
    setMovies(data.movies);
    }
    catch(err){
        console.log("Error in fetching movies",err);
    }
  }
 
  return (
    <>
    <title>MovieBuzz | Home</title>
     <div className="container mx-auto px-4 py-8">
      <MovieSlider movies={movies.slice(0, 5)} />
      <MovieList movies={movies} />
    </div>
    </>
  )
}
