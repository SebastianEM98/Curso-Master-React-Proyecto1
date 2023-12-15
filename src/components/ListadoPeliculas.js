import React, { useEffect, useState } from 'react'
import { EditarPelicula } from './EditarPelicula';

export const ListadoPeliculas = ({ listadoState, setListadoState }) => {

    // const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        obtenerPeliculas();
    }, []);

    const obtenerPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPelicula = (id) => {
        // Obtener peliculas almacenadas
        let peliculasAlmacenadas = obtenerPeliculas();

        // Filtrar las peliculas obtenidas para que se elimine del array la que no se desea
        let nuevoArrayPeliculas = peliculasAlmacenadas.filter(pelicula => pelicula.id !== parseInt(id));

        // Actualizar estado del listado
        setListadoState(nuevoArrayPeliculas);

        // Actualizar los datos en el localStorage
        localStorage.setItem("peliculas", JSON.stringify(nuevoArrayPeliculas));
    }

    if (listadoState !== null && listadoState.length > 0) {
        return (
            <>
                {listadoState.map((pelicula) => {
                    return (
                        <article key={pelicula.id} className="movie-item">
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">{pelicula.descripcion}</p>

                            <button className="edit" onClick={() => setEditar(pelicula.id) }>Editar</button>
                            <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Borrar</button>

                            {/* Formulario para editar */}
                            {editar === pelicula.id && (
                                <EditarPelicula pelicula={pelicula} obtenerPeliculas={obtenerPeliculas} setEditar={setEditar} setListadoState={setListadoState} />
                            )}
                        </article>
                    );
                })}
            </>
        )
    } else {
        return (
            <div className="container-no-movies">
                <h2>No hay películas por mostrar</h2>
            </div>
        )
    }
}
