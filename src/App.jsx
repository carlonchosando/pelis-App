import { PelisGrid } from "./components/PelisGrid";
import styles from './App.module.css';
import { PaginaInicio } from "./paginas/PaginaInicio";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { PeliDetalles } from "./components/PeliDetalle";



export function App() {
    return (
    <Router>
     <header>
        <Link to="/">
             <h1 className={styles.title}>Pelis</h1>
        </Link>  
         
         <main>
         <Switch>
          <Route exact path="/Peli/:PeliId"><PeliDetalles /></Route>
          <Route exact path="/"><PaginaInicio /></Route>
          <Route path="/">404</Route>           
        </Switch>
         </main>
     </header>
    </Router>
    );
}
