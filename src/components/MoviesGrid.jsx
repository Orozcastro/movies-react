// import movies from '../movies.json';
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';

export function MoviesGrid() {
  // https://www.themoviedb.org/signup user: Maferoro  psw: 1234
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
// 
// import { get } from "../utils/httpClient";