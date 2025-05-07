import React, { useEffect, useRef } from "react";
import './styles/Practicar.css';

function Practicar() {
  const boxRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number;  // Déclaration du type explicite pour startTime
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      // Calcul de la position du carré (déplacement)
      const position = Math.sin(elapsed / 1000) * 200 + 250;

      // Appliquer la position au style
      if (boxRef.current) {
        boxRef.current.style.transform = `translateX(${position}px)`;
        boxRef.current.style.backgroundColor = `rgb(${Math.abs(position) % 255}, 100, 150)`;
      }

      // Redemander une nouvelle animation
      animationRef.current = requestAnimationFrame(animate);
    };

    // Démarrer l'animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup lors du démontage du composant
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="practicar">
      {/* Ici vous pouvez pratiquer */}
      <div className="ejemplo" ref={boxRef} style={{ width: "100px", height: "100px", backgroundColor: "blue" }}>
      </div>
    </div>
  );
}

export default Practicar;
