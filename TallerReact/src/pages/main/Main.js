// src/pages/main/Main.js
import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom"; // Este Outlet renderiza las rutas hijas
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {

  const url = `https://catfact.ninja/fact`
  const [cleanDataDetail, setCleanDataDetail] = useState([]); 

  useEffect(() => {
    // Aquí puedes cargar datos si es necesario
    LoaderAllItems(setCleanDataDetail, url, );
  }, [setcleanDataDetail]);

  return (
    <div>
      <h1>Animales</h1>
      <TableMain data={cleanDataDetail} />
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

export default Main;
