import React from 'react'

export const EditarPelicula = ({ pelicula, obtenerPeliculas, setEditar, setListadoState }) => {

    const tituloComponente = "Editar película";

    const guardarModificaciones = (e, id) => {
        e.preventDefault();

        // Obtener el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const peliculasAlmacenadas = obtenerPeliculas();
        const indice = peliculasAlmacenadas.findIndex(pelicula => pelicula.id === id);

        // Crear objeto con el id de ese indice con los valores del formulario
        let peliculaActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        
        // Actualizar el elemento con ese indice
        peliculasAlmacenadas[indice] = peliculaActualizada;

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("peliculas", JSON.stringify(peliculasAlmacenadas));

        // Actualizar estados
        setListadoState(peliculasAlmacenadas);
        setEditar(0);
    }

    return (
        <div className="edit-form-container">
            <h3 className="title">{tituloComponente}</h3>

            <form className="edit-form" onSubmit={(e) => guardarModificaciones(e, pelicula.id)}>
                <input type="text" name="titulo" className="title-edited" defaultValue={pelicula.titulo} />
                <textarea name="descripcion" className="description-edited" defaultValue={pelicula.descripcion} ></textarea>

                <input type="submit" className="edit" value="Actualizar" />
            </form>
        </div>
    )
}
