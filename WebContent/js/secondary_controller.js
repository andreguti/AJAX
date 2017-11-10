$(document).ready( function(){
    //Esta plantilla le indica a JavaScript que realice un trabajo una vez cargada la página
    //A partir de este punto se pueden crear funciones para realizar control lógico sobre el HTML
     //Clear console
     console.clear();
     console.log("Limpiando la consola :)");
     ////JSON/////
     var myJSON = {"mensaje" : "Hola usuario"};
     var cadena = JSON.stringify(myJSON);

     $('button#btn-test-1').on("click", function (event) {
       //  console.log("Botón :) !!!");
     //alert(cadena);
     
     //// Dada la función matemática y = x^2, calcule los puntos en el plano (pero sin plano) desde -1 hasta 10
     
     var resultado = 0;
     
     var objetoJSON = {
    		 			x:0,
    		 			y:0
     				  };
     
     var arregloJSON = [];
     var contenedor = "";

     for(var x = -1; x <= 10; x++)
     {
         resultado = Math.pow(x, 2);
        // console.log("X: "+x+", Y: "+resultado);
         objetoJSON.x = x;
         objetoJSON.y = resultado;
         if(x != 10)
         {
            contenedor += JSON.stringify(objetoJSON) + ',';
         }
         else
         {
             contenedor += JSON.stringify(objetoJSON);    
         }
         
         //console.log(JSON.stringify(objetoJSON));
     }

     arregloJSON = [ contenedor ];
     //console.log(JSON.stringify(arregloJSON));

   /// Plantilla de AJAX

  // El ajax ya configurado
     $.ajax({
         url: "http://localhost:8080/AJAXMisc/maneja-puntos", //llamada al servlet
         type: "POST",										 // tipo de dato
         //Qué espero recibir de la ruta
         contentType: "application/json",
         //Que tipo de datos te voy a enviar
         dataType: "json",
         data: JSON.stringify(arregloJSON),

         //Servlet existe y me devolvió un JSON
         success: function(data, textStatus, jqXHR) {
             console.log("Si el acceso al servlet fue correcto");
             console.log(data.mensaje); 
         },
         error: function(jqXHR, textStatus, errorThrown) {
             console.log(jqXHR);
             console.log(textStatus);
             console.log(errorThrown);
         }
});




     
     });
});