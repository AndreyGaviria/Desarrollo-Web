
// ANIMALTARJETA.js
import React from 'react';
import '../styles/ANIMALTARJETA.css';

const ANIMALTARJETA = ({ nombre, descripcion, imagen }) => {
    return (
        <div className="animal-card">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
        </div>
    );
};

export default ANIMALTARJETA;
