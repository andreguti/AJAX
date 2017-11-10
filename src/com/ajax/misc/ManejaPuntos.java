package com.ajax.misc;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * Servlet implementation class ManejaPuntos
 */
@WebServlet(name = "/ManejaPuntos" , urlPatterns="/maneja-puntos")
public class ManejaPuntos extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ManejaPuntos() 
    {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO Auto-generated method stub		
				response.setContentType("applicationjson");
				//Construir el mensaje por defecto, por si falla...
				JsonObject joDefault = new JsonObject();
		        joDefault.addProperty("mensaje", "error");
		        String jsonResult = joDefault.toString();
		        //Obtener el JSON que me envió AJAX
				//JsonObject jo = JSONHandler.getJsonObject(request.getReader());
				//String mensaje = jo.get("mensaje").getAsString();
				//System.out.println(mensaje);
		        JsonArray jArray = new JsonArray();
		        jArray = JSONHandler.getJsonArray(request.getReader());
		        //System.out.println(jArray.toString());
		        
		        for(int x = 0; x < jArray.size(); x++)
		        {
		            System.out.println(x+" : "+jArray.get(x).toString());
		        }
		        
				
				 // Escribir el JSON y regresarlo como respuesta al frontend
		        try (PrintWriter out = response.getWriter()) {
		            /* TODO output your page here. You may use following sample code. */
		        	joDefault = new JsonObject();
		            joDefault.addProperty("mensaje", "Hola AJAX");
		            jsonResult = joDefault.toString();
		            out.print(jsonResult);
		        }
	}

}
