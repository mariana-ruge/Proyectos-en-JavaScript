function convertir()
{
    let valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML= "<b>" + valor + "</b>";
    de = document.getElementById("convertir").value;
    a = document.getElementById("convertido").value;
    let dolar = 3900;
    let euro = 4407;
    let resultado = 0;

    //De pesos a dolares
     if ( de == 1 && a == 2)
     {
        resultado = valor/dolar;
     }
     //De pesos a Euros
     else if (de == 1 && a == 3)
     {
         resultado = valor / euro;
     }
     //De dolar a peso
     else if (de == 2 && a == 1)
     {
         resultado = valor * dolar;
     }

     //Dolar a euro
     else if  (de == 2 && a == 3)
     {
         resultado = valor * (dolar/euro);
     }

     //Euro a peso
     else if (de == 1 && a == 3)
     {
         resultado = valor * euro;
     }

     //Euro a dolar
     else if (de == 3 && a == 2) 
     {
        resultado = valor * (euro/dolar);
     }

     else
     {
         resultado = valor;
     }

     document.getElementById("resultado").innerHTML = "Resultado: $" + resultado.toFixed(2);

}



