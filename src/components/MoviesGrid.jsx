// import movies from '../movies.json';
import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from "./Spinner";
 

export function MoviesGrid() {
  // https://www.themoviedb.org/signup user: Maferoro  psw: 1234
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery(); //vamos a tener acceso al valor
  const search = query.get("search");
  console.log(search);

  // siempre se esta ejecutando useEffect si no tiene parametros
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]); //se vuelve a ejecutar useEffect si cambia el parametro de search

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}