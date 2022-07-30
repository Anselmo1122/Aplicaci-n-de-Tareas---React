import React, {useState} from "react";
import '../hojas-de-estilo/TareaForm.css'
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
      completada: false
    };
    // Esta función será un "prop" que va a enviar "tareaNueva";
    props.onSubmit(tareaNueva);
  };

  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaForm;