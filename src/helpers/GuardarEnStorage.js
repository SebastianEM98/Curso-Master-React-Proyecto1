
export const guardarEnStorage = (clave, elemento) => {

    // Obtener los elementos que ya se tiene en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if (Array.isArray(elementos)) {
        // Añadir un elemento nuevo al array
        elementos.push(elemento);
    } else {
        // Crear array con el nuevo elemento
        elementos = [elemento];
    }

    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Retronar objeto guardado
    return elemento;
}