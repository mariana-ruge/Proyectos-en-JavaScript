const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto');

const listadoContactos = document.querySelector('.listado-de-Contactos');

//querySelector devuelve el primer elemento del documento encontrado en el DOM (utiliza un recorrido a profundidad)

const database = window.localStorage

btnAgregarContacto.onclick = () => 
{
    let contacto = 
    {
        id: Math.random(1, 100),
        nombre: nombre.value,
        numero: numero.value,
        direccion:direccion.value,
    }
    guardarContacto(database, contacto)
}

cargarContactos(database,listadoContactos);