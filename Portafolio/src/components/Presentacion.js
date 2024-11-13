import React from 'react';
import '../styles/Presentacion.css';

const Presentacion = () => {
  return (
    <div className="presentacion-container">
      <header className="presentacion-header">
        <h1>Portafolio</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className="profile-card">
        <div className="profile-image">
          <img src="ruta_a_la_imagen" alt="Paisaje" />
        </div>
        <div className="profile-info">
          <h2>Andrey Gaviria</h2>
          <p>Presentación.</p>
        </div>
        <div className="logo">
          <img src="ruta_al_logo" alt="Logo" />
          <p>Logo</p>
        </div>
      </div>

      <div className="categories">
        <button className="category art">Art</button>
        <button className="category science">Science</button>
        <button className="category technology">Technology</button>
      </div>

      <button className="contact-button">Contacto</button>
    </div>
  );
};

export default Presentacion;
