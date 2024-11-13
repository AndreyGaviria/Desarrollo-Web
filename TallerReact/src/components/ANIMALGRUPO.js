
// ANIMALGRUPO.js
import React from 'react';
import '../styles/ANIMALGRUPO.css';
import ANIMALTARJETA from './ANIMALTARJETA';

const ANIMALGRUPO = ({ animales }) => {
    return (
        <div className="animal-list">
            {animales && animales.length > 0 ? (
                animales.map((animal, index) => (
                    <ANIMALTARJETA
                        key={index}
                        nombre={animal.nombre}
                        descripcion={animal.descripcion}
                        imagen={animal.imagen}
                    />
                ))
            ) : (
                <p>No hay animales disponibles.</p>
            )}
        </div>
    );
};

export default ANIMALGRUPO;
