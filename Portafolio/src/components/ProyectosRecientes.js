import React from 'react';
import '../styles/ProyectosRecientes.css';

const ProyectosRecientes = () => {
    const proyectos = [
        { nombre: "NOMBRE PROYECTO", categoria: "tecnologia", icono: "🪴" },
        { nombre: "NOMBRE PROYECTO", categoria: "arte", icono: "🌱" },
        { nombre: "NOMBRE PROYECTO", categoria: "ciencias", icono: "⭕" },
        { nombre: "NOMBRE PROYECTO", categoria: "tecnologia", icono: "🌿" },
        { nombre: "NOMBRE PROYECTO", categoria: "arte", icono: "✴️" },
        { nombre: "NOMBRE PROYECTO", categoria: "ciencias", icono: "⛓️" }
    ];

    return (
        <div className="proyectos-container">
            <aside className="sidebar">
                <h2>PROYECTOS RECIENTES</h2>
                <div className="ia-image">
                    <img src="ruta_a_imagen_tiburon" alt="IA" />
                    <p>(IA)</p>
                </div>
                <button className="sonido-button">SONIDO</button>
            </aside>

            <main className="proyectos-main">
                <div className="categorias">
                    <h3>TECNOLOGIA</h3>
                    <h3>ARTE</h3>
                    <h3>CIENCIAS</h3>
                </div>
                <div className="proyectos-grid">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className={`proyecto-card ${proyecto.categoria}`}>
                            <div className="proyecto-icon">{proyecto.icono}</div>
                            <p>{proyecto.nombre}</p>
                            <span className="mas-icono">+</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProyectosRecientes;
