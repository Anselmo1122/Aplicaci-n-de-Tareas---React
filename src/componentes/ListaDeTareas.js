import React, {useState, useEffect} from "react"
import TareaForm from "./TareaForm"
import Tarea from "./Tarea"
import MisTareas from "./MisTareas"
import "../hojas-de-estilo/ListaDeTareas.css"

const estadoInicial = JSON.parse(localStorage.getItem("tareas"));

function ListaDeTareas() {

  const [tareas, setTareas] = useState(estadoInicial || []);

  useEffect(()=>{
    window.localStorage.setItem("tareas",JSON.stringify(tareas), [tareas])
  });

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];      
      setTareas(tareasActualizadas);
    }
  }

  const completarTarea = id => {

    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {tarea.completada = !tarea.completada}
      return tarea
    })

    setTareas(tareasActualizadas);
  }

  const eliminarTarea = id => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  };

  return (
    <div className="tareas-contenedor">
      <MisTareas />
      <TareaForm onSubmit={agregarTarea} />
      <h2 className={tareas.length === 0 ? "no-hay-tareas" : "hay-tareas"}>
          No hay tareas
      </h2>
      <div className="tareas-lista">
        {
          tareas.map(tarea=> 
            <Tarea           // Si no se incluye "Key" ocurrirá un error; 
              key={tarea.id} // "Key" es una forma que tiene "React" de identificar un elemento en la lista;
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea} />
          )
        }
      </div>
    </div>
  );
}

export default ListaDeTareas;
