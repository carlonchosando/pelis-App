import { PelisGrid } from "./PelisGrid";
import styles from './App.module.css';


export function App() {
    return (
    <div>
     <header>
         <h1 className={styles.title}>Pelis</h1>
         <main>
            <PelisGrid />
         </main>
     </header>
    </div>
    );
}
