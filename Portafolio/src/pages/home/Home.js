import React from "react";
import Presentacion from "../../components/Presentacion"; // Asegúrate de que esta ruta es correcta
import ProyectosRecientes from "../../components/ProyectosRecientes";
import Contacto from "../../components/Contacto";

const Home = () => {
    return (
        <div className="container">
            {/* Aquí se renderiza el componente Presentacion */}
            <Presentacion />
            <ProyectosRecientes />
            <Contacto />
            <a href="/main">Iniciar</a>
        </div>
    );
}

export default Home;
