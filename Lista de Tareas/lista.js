  /*Traer los elementos del HTML*/
  let lista = document.getElementById("lista");
  let tareaInput = document.getElementById("tareas");
  let botonAgregar = document.getElementById("btn-agregar");

  //Eventos
  botonAgregar.addEventListener('click', agregarTarea);
  tareaInput.addEventListener('click', comprobarInput);

  //Funciones

  function comprobarInput()
    {

    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega una tarea");
    
    }
  //Agregar tarea
  function agregarTarea()
  { 
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("p");
    let contenido = document.createTextNode(tarea);

    if (tarea === "")
    {
        alert("no puedes agregar una tarea vacía");
        return false;
    }

    //Agregar contenido al enlace
    enlace.appendChild(contenido);
    enlace.setAttribute("href", "#");
    nuevaTarea.appendChild(enlace);
    lista.appendChild(nuevaTarea);

    //Borrar las tareas de la caja
    tareaInput.value = "";
    
    //Ciclos
    //Borrar tareas
    for (let i = 0; i <= lista.children.length - 1; i++) 
    {
     lista.children[i].addEventListener("click", function()
     {
         this.parentNode.removeChild(this);
     });
    }
    

  }
