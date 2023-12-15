import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { CrearPelicula } from "./components/CrearPelicula";
import { ListadoPeliculas } from "./components/ListadoPeliculas";

function App() {

    const [listadoState, setListadoState] = useState([]);

    return (
        <div className="layout">
            {/* Cabecera */}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>MisPelis</h1>
            </header>

            {/* Barra de Navegación */}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Películas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido Principal */}
            <section className="content">
                {/* Listado de Películas */}
                <ListadoPeliculas listadoState={listadoState} setListadoState={setListadoState}/>
            </section>

            {/* Barra Laterar */}
            <aside className="lateral">
                <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

                <CrearPelicula setListadoState={setListadoState}/>
            </aside>

            {/* Pie de Página */}
            <footer className="footer">
                &copy; Curso Máster en React - Proyecto #1 - <a href="https://github.com/SebastianEM98/Curso-Master-React-Proyecto1">github.com/SebastianEM98/Curso-Master-React-Proyecto1</a>
            </footer>
        </div>
    );
}

export default App;
