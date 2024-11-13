import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto-container">
            {/* Sección del logo */}
            <div className="logo-section">
                <img src="ruta_a_logo" alt="Logo" className="logo-img" />
                <h1>ANDREY GAVIRIA</h1>
            </div>
            
            {/* Sección del paisaje */}
            <div className="paisaje">
                <div className="cielo">
                    <div className="nube"></div>
                    <div className="nube"></div>
                </div>
                <div className="tierra"></div>
            </div>

            {/* Formulario de contacto */}
            <div className="form-section">
                <h2>CONTACTO</h2>
                <hr />
                <div className="formulario">
                    <input type="text" placeholder="CORREO ELECTRONICO" />
                    <input type="text" placeholder="NUMERO DE TELEFONO" />
                    <textarea placeholder="MENSAJE"></textarea>
                    <button>ENVIAR</button>
                </div>

                {/* Redes sociales */}
                <h2>REDES SOCIALES</h2>
                <hr />
                <div className="redes-sociales">
                    <div className="circle blue"></div>
                    <div className="circle dark-blue"></div>
                    <div className="circle gray"></div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
