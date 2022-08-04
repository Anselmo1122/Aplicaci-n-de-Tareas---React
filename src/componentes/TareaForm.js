import React, {useState} from "react";
import '../hojas-de-estilo/TareaForm.css'
import {AiOutlineFieldTime, AiFillPlusSquare} from 'react-icons/ai';
import {v4 as uuidv4} from 'uuid';

function TareaForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
      guardada: false
    };

    const IDBRequest = indexedDB.open("TareaBase", 1);
    
    IDBRequest.addEventListener("upgradeneeded",()=>{
      const db = IDBRequest.result;
      db.createObjectStore("Tareas",{autoIncrement:tareaNueva.id});
      console.log("Se ha creado correctamente.");
    })

    IDBRequest.addEventListener("succes",()=>{
      console.log("Todo salio bien.");
    })

    IDBRequest.addEventListener("error",()=>{
      console.log("ha ocurrido un error");
    })

    // Esta función será un "prop" que va a enviar "tareaNueva";
    props.onSubmit(tareaNueva);
  };

  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <div 
        className='form-contenedor-iconos'
        onClick={()=>props.mostrarTareasGuardadas()}>
        <AiOutlineFieldTime className='form-icono' title="Tareas guardadas" />
      </div>
      <input 
        className='tarea-input'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        <div className="tarea-icono">
          <AiFillPlusSquare className="form-icono" title="Agregar Tarea"/>
        </div>
      </button>
    </form>
  );
}

export default TareaForm;