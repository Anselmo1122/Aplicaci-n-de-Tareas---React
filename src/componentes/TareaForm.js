import React, {useState} from "react";
import "../hojas-de-estilo/TareaForm.css"
import {AiFillPlusSquare} from "react-icons/ai";
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

    // Esta función será un "prop" que va a enviar "tareaNueva";
    props.onSubmit(tareaNueva);
  }

//---------------- Elemento JSX "Tarea Formulario" ----------------
  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
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