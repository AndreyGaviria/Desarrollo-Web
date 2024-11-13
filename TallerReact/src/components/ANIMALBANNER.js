
import React, { useState, useEffect } from 'react';
import '../styles/ANIMALBANNER.css';

const ANIMALBANNER = () => {
    // Usamos useState para gestionar el estado del color de fondo
    const [backgroundColor, setBackgroundColor] = useState('#A8D5BA'); // Color verde suave inicial

    // Usamos useEffect para cambiar el color de fondo después de que el componente se haya montado
    useEffect(() => {
        // Cambiar el color de fondo después de 3 segundos como ejemplo
        const timer = setTimeout(() => {
            setBackgroundColor('#4CAF50'); // Verde brillante después de 3 segundos
        }, 3000); // 3000 milisegundos = 3 segundos

        // Limpiar el timer cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <div
            className="animal-banner"
            style={{ backgroundColor: backgroundColor }} // Usamos el color de fondo en lugar de la imagen
        >
            <h1>Explora el Mundo Animal</h1>
        </div>
    );
};

export default ANIMALBANNER;


