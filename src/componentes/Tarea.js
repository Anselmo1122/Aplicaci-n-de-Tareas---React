import React from "react";
import "../hojas-de-estilo/Tarea.css";
import {BsXSquareFill} from "react-icons/bs";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
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
    </>
  );
}

export default Tarea;