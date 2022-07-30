import React from "react";
import '../hojas-de-estilo/MisTareas.css'

function MisTareas() {
  return (
    <div className="mis-tareas-contenedor">
      <div className="mis-tareas-fondo">
        <div className="mis-tareas-walk"></div>
        <div className="mis-tareas-walk-scan"></div>
        <div className="mis-tareas-walk2"></div>
        {/* <div className="mis-tareas-walkDog"></div> */}
        <h1>Mis Tareas</h1>
        {/* <div className="mis-tareas-walkBird"></div> */}
        <div className="mis-tareas-punk-run"></div>
        <div className="mis-tareas-walkBird"></div>
        <div className="mis-tareas-biker-run"></div>
        <div className="mis-tareas-walkDog"></div>
      </div>
    </div>
  )
}

export default MisTareas;