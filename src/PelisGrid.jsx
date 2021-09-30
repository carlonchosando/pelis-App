import movies from './Movies.json';
import { PeliTarjeta } from './PeliTarjeta.jsx';

export function PelisGrid() {    
    return(
       <ul>
          {movies.map((movie) => ( 
          <PeliTarjeta key={movie.id} movie={movie}/>
          ))}
       </ul> 
    );
}