import React, {useState} from "react"
import TareaForm from "./TareaForm"
import Tarea from "./Tarea"
import MisTareas from "./MisTareas"
import "../hojas-de-estilo/ListaDeTareas.css"



export default function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

//------------ Función para mostrar tareas guardadas ------------
  const tareasGuardadas = [];

  const mostrarTareasGuardadas =()=> {

    const IDBRequest = indexedDB.open("TareaBase", 1);

    IDBRequest.addEventListener("upgradeneeded",()=>{
      const db = IDBRequest.result;
      db.createObjectStore("Tareas");
    })
    
    const readTareas = () => {
      const db = IDBRequest.result;
      const IDBTransaction = db.transaction("Tareas");
      const objectStore = IDBTransaction.objectStore("Tareas");
      const cursor = objectStore.openCursor();
    
      cursor.addEventListener("success",()=>{
        if(cursor.result){
          tareasGuardadas.push(cursor.result.value);
          cursor.result.continue();
        } else {
          setTareas(tareasGuardadas);
          if (tareasGuardadas.length === 0) {
            alert("No hay tareas guardadas");
          }
        }
      })
    }

    setTimeout(() => {readTareas()}, 500);
  }


//------------------ Función para agregar tarea ------------------
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];      
      setTareas(tareasActualizadas);
    }
  }


//------------------ Función para guardar tarea ------------------
 const guardarTarea = id => {

  const IDBRequest = indexedDB.open("TareaBase", 1);

  const addTarea = (tarea,key) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("Tareas","readwrite");
    const objectStore = IDBTransaction.objectStore("Tareas");
    objectStore.add(tarea,key);
  }

  const tareasActualizadas = tareas.map(tarea => {
    if(tarea.id === id){
      tarea.guardada = true;
      setTimeout(()=>{addTarea(tarea,tarea.id)},500)}
      return tarea;
    }
  )

    setTareas(tareasActualizadas);
  }


//------------------ Función para completar tarea ----------------
  const completarTarea = id => {

    const IDBRequest = indexedDB.open("TareaBase", 1);

    const editTarea = (tarea,key) => {
      const db = IDBRequest.result;
      const IDBTransaction = db.transaction("Tareas","readwrite");
      const objectStore = IDBTransaction.objectStore("Tareas");
      objectStore.put(tarea,key);
    }

    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        setTimeout(()=>{
          editTarea({
            id: tarea.id,
            texto: tarea.texto,
            completada: tarea.completada,
            guardada: tarea.guardada},tarea.id)
          },500)}
        return tarea;
      }
    )

    setTareas(tareasActualizadas);
  }


//------------------ Función para eliminar tarea -----------------
  const eliminarTarea = id => {

    const IDBRequest = indexedDB.open("TareaBase", 1);

    const deleteTarea = key => {
      const db = IDBRequest.result;
      const IDBTransaction = db.transaction("Tareas","readwrite");
      const objectStore = IDBTransaction.objectStore("Tareas");
      objectStore.delete(key);
    }

    tareas.map(tarea => {
      if (tarea.id === id){setTimeout(()=>{deleteTarea(tarea.id)},500)}
      return tarea
    })

    setTareas(tareas.filter(tarea => tarea.id !== id))
  };


//---------------- Elemento JSX "lista de Tareas" ----------------
  return (
    <div className="tareas-contenedor">
      <MisTareas />
      <TareaForm 
        onSubmit={agregarTarea}
        mostrarTareasGuardadas={mostrarTareasGuardadas}
      />
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
              completarTarea={completarTarea}
              guardarTarea={guardarTarea}
              guardada={tarea.guardada}
            />
          )
        }
      </div>
    </div>
  );
  
}
