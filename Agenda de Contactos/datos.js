const guardarContacto = (database, contacto) =>
{
    database.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = 'agenda.html';
}

const cargarContactos = (database, parentNode) =>
{
    let claves = Object.keys(database)
    for(clave of claves)
    {
        let contacto = JSON.parse(database.getItem(clave))
        crearContacto(parentNode, contacto, database)
    }
}

const crearContacto = (parentNode, contacto, database) =>
{
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('listado-de-Contactos')
    iconoBorrar.classList.add('material-icons', 'icono')


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}
