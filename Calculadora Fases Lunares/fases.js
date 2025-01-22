console.log("todo en orden");


/*
    Lógica para cálcular la fase lunar

    - Se una fase de luna nueva de referencia
    
    Pasos:
    1. Obtener la diferencia entre los días de la fecha ingresada, y una fecha de luna nueva conocida
    2. Cálcular la fase lunar con el módulo del número de días por el ciclo lunar
        (El ciclo lunar consta de 29.53 días)
        0.53 * 24 = 12.72 -> 12 horas
        0.72 * 60 = 43.2 -> 43 minutos
    3. Determinar la fase según el resultado


*/



//Añadir el event listener del cálculo de la fase lunar
document.getElementById('calcular-btn').addEventListener('click', () => 
    {
        //Log para verificar la llamada de los botones
        console.log("El botón esta funcionando")

        //Traerse la fecha de la caja de texto del html
        const fecha = document.getElementById('date-input').value;
        console.log(fecha)

        //Verificar si se selecciono la fecha de forma correcta
        if(fecha)
        {
            //Convertir la fecha seleccionada en un objeto Date
            const fechaSeleccionada = new Date(fecha);
            
            //Usar una fecha de referencia: luna nueva conocida - 6 de enero del 2000
            const fechaReferencia = new Date('2000-01-06');

            //Diferencia en días entre la fecha seleccionada y la referencia
            const diferenciaDias = (fechaSeleccionada - fechaReferencia) / (1000*60*24)

            //Calcular la edad de la luna en días dentro de un ciclo lunar
            const cicloLunar = 29.53; // Duración del ciclo lunar en días

            //La edad lunar es el módulo entre los días y el ciclo
            const edadLunar = diferenciaDias % cicloLunar;

            //Normalizar los datos para evitar datos imprecisos
            //Se usa operador ternario
            const edadLunarNormalizada = edadLunar < 0 ? cicloLunar + edadLunar : edadLunar;

            //Mostrar la edad lunar en la consola
            // Se redondea a dos cifras
            console.log(`Edad Lunar: ${edadLunarNormalizada.toFixed(2)} dias`)


            //Determinar la fase lunar según la edad
            let fase = "";

            //Usar condicionales para encontrar la fase lunar adecuada
            if (edadLunarNormalizada < 1)
                {
                    fase = "Luna Nueva";
                    imagen = "./nueva.png";
                }
            else if(edadLunarNormalizada < 7.4)
                {
                    fase = "Cuarto Creciente"
                    imagen = "./cuarto.png";
                }
            else if(edadLunarNormalizada < 14.8)
                {
                    fase = "Luna Llena"
                    imagen = "./llena.png";
                }
            else if(edadLunarNormalizada < 22.1)
                {
                    fase = "Cuarto Menguante";
                    imagen = "./menguante.png";
                }
            else
                {
                    fase = "Luna nueva";
                    imagen = "./nueva.png";
                }

            //Mostrar la fase lunar en el resultado
            document.getElementById('resultado').innerHTML = `
            <h2> Fase Lunar: ${fase}</h2>
            <div id = "imagen-fase-lunar" class="lunar-image">
                <img src="${imagen}" alt="${fase}" style="max-width: 200px; height: auto;"
            </div>`;
            console.log(`Fase Lunar: ${fase}`)

        }
        else
        {
            alert("Se debe seleccionar una fecha válida")
        }




    })