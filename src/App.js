import './App.css';
import {  Route, Routes,Link } from 'react-router-dom';
import Pub from './pub';
import Piblikasyon from './piblikasyon';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1>Enonse 3</h1>
      <nav>
        <ul>
       

        </ul>
      </nav>
    
      <Routes>
  <Route path="/" element={<Piblikasyon />} />
  <Route path="/piblikasyon" element={<Piblikasyon />} />
  <Route path="/piblikasyon/pub/:id" element={<Pub />} />
</Routes>
      
    </div>
  );
}

export default App;
