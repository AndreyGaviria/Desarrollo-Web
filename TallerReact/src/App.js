// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import ANIMALMARINO from './pages/ANIMALMARINO/ANIMALMARINO'; // Importamos el componente
import '../src/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-screen">
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta para la página principal */}
          <Route path="main" element={<Main />} />
          
          {/* Ruta para el componente ANIMALMARINO */}
          <Route path="/ANIMALMARINO" element={<ANIMALMARINO />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
