import { Link } from 'react-router-dom';
import styles from './PeliTarjeta.module.css';




export function PeliTarjeta({movie}) {
    const imagenUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    
    return <li className={styles.peliTarjeta}>
        <Link to={"/Peli/" + movie.id}>
        <img
            width={230} 
            HEIGHT={345}
            className={styles.peliImagen} 
            src={imagenUrl} 
            alt={movie.title}
            />
        <div>{movie.title}</div>
        </Link>
        </li>
}