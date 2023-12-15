import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const CrearPelicula = ({ setListadoState }) => {

    const tituloComponente = "Añadir película";
    const [peliculaState, setPeliculaState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliculaState;

    const obtenerDatosForm = e => {
        // El preventDefault evita que se recargue pagina hacer submit en el formulario
        e.preventDefault();

        // Obtener datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear el objeto de la pelicula a guardar
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar estado
        setPeliculaState(pelicula);

        // Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, pelicula];
        })

        // Guardar en el localStorage
        guardarEnStorage("peliculas", pelicula);
    }


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la película: " + titulo}
            </strong>

            <form onSubmit={obtenerDatosForm}>
                <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
                <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
