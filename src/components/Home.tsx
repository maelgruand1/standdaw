import React, { useState } from 'react';
import Practicar from './Practicar';
import './styles/Home.css';
import VideoPresent from './VideoPresent';

function Home() {
  // Définir l'état pour afficher ou non le composant Practicar
  const [showPracticar, setShowPracticar] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePracticarClick = () => {
    setShowPracticar(true);
    setShowVideo(false);
  };
  
  const handleVideoClick = () => {
    setShowVideo(true);
    setShowPracticar(false);
  };
  
  return (
    <div>
      <h2>Pagina de inicio</h2>
      <p>Quieres ver un ejemplo</p>
      <div className='button-group'>
      <button onClick={handlePracticarClick}>Pincha aquí</button>
      
      <button onClick={handleVideoClick}>Ver la presentación</button>

      </div>
      
      {/* Affichage conditionnel de Practicar */}
      {showPracticar && <Practicar />}
      {showVideo && <VideoPresent/>}

      <p>Quieres ver un ejemplo de pagina</p>
      <a href="https://stefano-gac.github.io/PaginadeJuegos/" target="_blank" rel="noopener noreferrer">
      Web de videojuegos</a>
    </div>
  );
}

export default Home;
