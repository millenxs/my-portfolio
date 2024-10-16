import React, { useEffect } from 'react';
import './style/Hero.css'; 

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX; 
      const y = event.clientY; 

      
      document.body.style.setProperty('--cursor-x', `${x}px`);
      document.body.style.setProperty('--cursor-y', `${y}px`);
    };

    
    document.body.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
	<div className="hero-container">
      <h1 aria-label="Develop. Preview. Ship." className="hero_title__H3hra">
        <span
          className="animated-gradient-text_background__tSv9a animated-gradient-text_background-1__yGu4G"
          style={{
            '--content': "'Develop.'",
            '--padding': '0.05em',
            '--start-color': 'var(--develop-start-gradient)',
            '--end-color': 'var(--develop-end-gradient)',
          } as React.CSSProperties}
        >
          <span className="animated-gradient-text_foreground__PuOdy animated-gradient-text_foreground-1__s2FIH" >
            Develop.
          </span>
        </span>
        <span
          className="animated-gradient-text_background__tSv9a animated-gradient-text_background-2__wnP8s"
          style={{
            '--content': "'Millena.'",
            '--padding': '0.05em',
            '--start-color': 'var(--preview-start-gradient)',
            '--end-color': 'var(--preview-end-gradient)',
          } as React.CSSProperties }
        >
          <span className="mx-2 animated-gradient-text_foreground__PuOdy animated-gradient-text_foreground-2__m3PnD">
            Millena.
          </span>
        </span>
        <span
          className="animated-gradient-text_background__tSv9a animated-gradient-text_background-3__sz5ye"
          style={{
            '--content': "'Medeiros.'",
            '--padding': '0.05em',
            '--start-color': 'var(--ship-start-gradient)',
            '--end-color': 'var(--ship-end-gradient)',
          } as React.CSSProperties}
        >
          <span className="animated-gradient-text_foreground__PuOdy animated-gradient-text_foreground-3__KfLOT">
            Medeiros.
          </span>
        </span>
      </h1>

      <div className="bg-wrap">
        <div className="bg-tiles"></div>
      </div>
	</div>
  );
};

export default Hero;
