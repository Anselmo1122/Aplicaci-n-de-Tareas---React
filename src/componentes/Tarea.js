import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BsPinAngle } from "react-icons/bs";

function Tarea({id, texto, completada, completarTarea, eliminarTarea, guardarTarea, guardada}) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={()=>completarTarea(id)} >
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={()=>eliminarTarea(id)} >
        <AiOutlineCloseSquare className='tarea-icono-eliminar' title="Eliminar" />
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={()=>guardarTarea(id)} >
        <BsPinAngle 
          className={guardada ? 'tarea-icono-guardada' : 'tarea-icono'}
          title="Guardar" />
      </div>
    </div>
  );
}

export default Tarea;

