import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);


    const buscarPelicula = (e) => {
        // Crear estado y actualizarlo
        setBusqueda(e.target.value);

        // Filtrar para buscar coincidencias
        let peliculasEncontradas = listadoState.filter(pelicula => {
            return pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })

        if (busqueda.length <= 1 || peliculasEncontradas <= 0) {
            peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        // Actualizar el estado del listado principal con lo filtrado
        setListadoState(peliculasEncontradas);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>

            {(noEncontrado == true && busqueda.length > 1) && (
                <span className="not-found">No se ha encontrado ninguna coincidencia</span>
            )}

            <form>
                <input type="text" id="search-field" name="busqueda" autoComplete="off" onChange={buscarPelicula} />
                <button>Buscar</button>
            </form>
        </div>
    )
}
