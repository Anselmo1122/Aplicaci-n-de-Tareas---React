import React from "react";
import "../hojas-de-estilo/Tarea.css";
import {BsFillPinFill, BsXSquareFill} from "react-icons/bs";

function Tarea({id, texto, completada, completarTarea, eliminarTarea, guardarTarea, guardada}) {
//---------------- Elemento JSX "Tarea" ----------------
  return(
    <>
      <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
        <div 
          className="tarea-texto"
          onClick={()=>completarTarea(id)} >
          {texto}
        </div>
        <div
          className="tarea-contenedor__eliminar"
          onClick={()=>eliminarTarea(id)} >
          <BsXSquareFill
            className="tarea-icono__eliminar" 
            title="Eliminar" />
        </div>
      </div>
      <div 
          className="tarea-contenedor__guardar"
          onClick={()=>guardarTarea(id)} >
          <BsFillPinFill 
            className={guardada ? "tarea-icono__guardada" : "tarea-icono"}
            title="Guardar" />
      </div>
    </>
  );
}

export default Tarea;