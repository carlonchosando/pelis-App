import movies from './Movies.json';
import { PeliTarjeta } from './PeliTarjeta.jsx';
import styles from './PelisGrid.module.css';

export function PelisGrid() {    
    return(
      <ul className={styles.gridPelis}>
         {movies.map((movie) => ( 
         <PeliTarjeta key={movie.id} movie={movie}/>
         ))}
      </ul> 
    );

}