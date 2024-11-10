import React from "react";


const ANIMALMARINO = () => {
    const animalesMarinos = [
        { nombre: "Delfín", descripcion: "Los delfines son conocidos por su inteligencia y agilidad.", imagen: "https://example.com/delfin.jpg" },
        { nombre: "Tiburón", descripcion: "El tiburón es un depredador marino que se encuentra en océanos de todo el mundo.", imagen: "https://example.com/tiburon.jpg" },
        { nombre: "Ballena", descripcion: "Las ballenas son mamíferos marinos gigantes, famosos por su migración.", imagen: "https://example.com/ballena.jpg" },
        { nombre: "Tortuga Marina", descripcion: "Las tortugas marinas son reptiles que pasan la mayor parte de su vida en el mar.", imagen: "https://example.com/tortuga.jpg" },
        { nombre: "Estrella de Mar", descripcion: "Las estrellas de mar son invertebrados marinos que se encuentran en los fondos oceánicos.", imagen: "https://example.com/estrella-de-mar.jpg" },
    ];

    return (
        <div className="animal-marino-container">
            <h1 className="title">Descubre los Animales Marinos</h1>
            <p className="subtitle">Sumérgete en el fascinante mundo de los animales que habitan nuestros océanos.</p>
            <div className="animal-list">
                {animalesMarinos.map((animal, index) => (
                    <div key={index} className="animal-card">
                        <img src={animal.imagen} alt={animal.nombre} className="animal-image" />
                        <h2 className="animal-name">{animal.nombre}</h2>
                        <p className="animal-description">{animal.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ANIMALMARINO;
