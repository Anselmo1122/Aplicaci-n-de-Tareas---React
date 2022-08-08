import React, {useState} from "react";
import "../hojas-de-estilo/TareaForm.css"
import {AiFillPlusSquare} from "react-icons/ai";
import {BsClockFill} from "react-icons/bs";
import {v4 as uuidv4} from "uuid";

export default function TareaForm(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value)
  }

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

    // Esta función será un "prop" que va a enviar "tareaNueva";
    props.onSubmit(tareaNueva);
  }

//---------------- Elemento JSX "Tarea Formulario" ----------------
  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      <div 
        className="tarea-formulario__boton-guardadas"
        onClick={()=>props.mostrarTareasGuardadas()}>
        <BsClockFill
          className="boton-guardadas__icono" 
          title="Tareas guardadas" />
      </div>
      <input 
        className="tarea-formulario__input"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio} />
      <button className="tarea-formulario__boton-agregar">
        <div className="boton-agregar">
          <AiFillPlusSquare 
            className="boton-agregar__icono" 
            title="Agregar Tarea" />
        </div>
      </button>
    </form>
  );
}