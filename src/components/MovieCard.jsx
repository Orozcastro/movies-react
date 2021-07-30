import styles from './MovieCard.module.css';

export function MovieCard({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className={styles.movieCard}>
        <img 
        with={230}
        height={345}
        className={styles.movieImg} 
        src={imgUrl} 
        alt={movie.title}></img>
        <div>{movie.title}</div>
      </li>
    );
}