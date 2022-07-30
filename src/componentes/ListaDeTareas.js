import React, {useState} from "react";
import TareaForm from "./TareaForm";
import Tarea from './Tarea'
import MisTareas from "./MisTareas";
import '../hojas-de-estilo/ListaDeTareas.css'



function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      // El operador "spread" permite agregar solo los elementos del array "tareas";
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    };
  };

  const eliminarTarea = id => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  };

  return (
     // (<></>) Estos son Fragmentos  en "React", sustituyen un div contenedor;
    <>
      <MisTareas />
      <TareaForm onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map(tarea=> 
            <Tarea           // Si no se incluye "Key" ocurrirá un error; 
              key={tarea.id} // "Key" es una forma que tiene "React" de identificar un elemento en la lista;
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;