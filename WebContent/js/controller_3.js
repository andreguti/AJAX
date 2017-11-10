$(document).ready( function(){
    //Esta plantilla le indica a JavaScript que realice un trabajo una vez cargada la página
    //A partir de este punto se pueden crear funciones para realizar control lógico sobre el HTML
     //Clear console
     console.clear();
     //console.log("Limpiando la consola :)");
     ////JSON/////
     var myJSON = {"mensaje" : "Hola usuario"};
     var cadena = JSON.stringify(myJSON);

     $('button#btn-test-1').on("click", function (event) {
       //  console.log("Botón :) !!!");
     //alert(cadena);
     
     //// Dada la función matemática y = x^2, calcule los puntos en el plano (pero sin plano) desde -1 hasta 10
     
     var resultado = 0;
     
     var objetoJSON = {
    		 			x:5,
    		 			y:2
     				  };
     
     var arregloJSON = [];
     var contenedor = "";

    
     resultado = objetoJSON.x + objetoJSON.y;
     contenedor = JSON.stringify(resultado);
     arregloJSON = [ contenedor ];
     console.log(JSON.stringify(arregloJSON));

   /// Plantilla de AJAX

  // El ajax ya configurado
     $.ajax({
         url: "http://localhost:8080/AJAXMisc/suma", //llamada al servlet
         type: "POST",										 // tipo de dato
         //Qué espero recibir de la ruta
         contentType: "application/json",
         //Que tipo de datos te voy a enviar
         dataType: "json",
         data: JSON.stringify(arregloJSON),

         //Servlet existe y me devolvió un JSON
         success: function(data, textStatus, jqXHR) {
            // console.log("Si el acceso al servlet fue correcto");
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