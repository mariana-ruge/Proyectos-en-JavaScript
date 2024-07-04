let boton = document.getElementById("btn-enviar");
boton.addEventListener('click', verificarRespuesta);

function  verificarRespuesta()
{
    //Declarar los puntos
    let total = 5;
    let puntos = 0;

    //Referenciar el formulario
    let formulario = document.forms["formulario"];
    
    //Declarar las respuestas
    let respuestas = ["c", "b", "d", "d", "a"];

    //Verificar respuestas
    for(let i = 1; i <= total; i++)
    {
        if(formulario["p" + i].value === null || formulario["p" + i].value === "")
        {
            alert(" Debes responder la pregunta " + i);
            return false;
            
        }
        else
        {
         if(formulario["p" + i].value === respuestas[i - 1 ])
            {
            puntos++;
            }
        }
    }

    //Mostrar el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ' <h3>Tu puntaje final fue <span> '+ puntos +' </span>  de <span> ' + total + ' puntos </span> </h3>'

    return false;
}
