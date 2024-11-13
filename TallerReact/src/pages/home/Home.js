
// Home.js
import React from "react";
import ANIMALBANNER from "../../components/ANIMALBANNER";
import ANIMALGRUPO from "../../components/ANIMALGRUPO";
import BOTONINFO from "../../components/BOTONINFO";
import DESCRIPCIONANIMAL from "../../components/DESCRIPCIONANIMAL";

// Datos de ejemplo para los animales
const animales = [
    { nombre: 'León', descripcion: 'El rey de la selva', imagen: 'url_leon.jpg' },
    { nombre: 'Tigre', descripcion: 'Felino feroz', imagen: 'url_tigre.jpg' },
    { nombre: 'Elefante', descripcion: 'El gigante de la sabana', imagen: 'url_elefante.jpg' }
];

const Home = () => {
    return (
        <div className="container">
            <ANIMALBANNER />
            <ANIMALGRUPO animales={animales} />
            <BOTONINFO />
            <DESCRIPCIONANIMAL />
            <a href="/main">Iniciar</a>
        </div>
    );
};

export default Home;

