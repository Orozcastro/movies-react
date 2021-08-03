import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export function MovieCard({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            with={230}
            height={345}
            className={styles.movieImg}
            src={imgUrl}
            alt={movie.title}
          />
          <div className={styles.title}>{movie.title}</div>
        </Link>
      </li>
    );
}