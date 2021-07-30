import movies from '../movies.json';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';

export function MoviesGrid() {
    console.log(movies);
    return (
      <ul className={styles.moviesGrid} >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
    );
}