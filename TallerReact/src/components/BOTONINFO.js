// src/components/BOTONINFO.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import '../styles/BOTONINFO.css';

const BOTONINFO = () => {
    return (
        // Envolvemos el botón con un Link para la navegación
        <Link to="/ANIMALMARINO" className="boton-info-link">
            <button className="boton-info">
                Más Información
            </button>
        </Link>
    );
};

export default BOTONINFO;
