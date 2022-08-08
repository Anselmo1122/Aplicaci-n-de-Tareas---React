import React from "react";
import "../hojas-de-estilo/MisTareas.css"

export default function MisTareas() {
//---------------- Elemento JSX "Mis Tareas" ----------------
  return (
    <div className="mis-tareas">
      <div className="mis-tareas__fondo">
        <h1 datatext="Mis Tareas">Mis Tareas</h1>
          <div className="mis-tareas__tile"></div>
            <div className="mis-tareas__punk-run"></div>
            <div className="mis-tareas__bird-fly"></div>
            <div className="mis-tareas__boss-run"></div>
            <div className="mis-tareas__biker-run"></div>
            <div className="mis-tareas__child-run"></div>
            <div className="mis-tareas__cat-run"></div>
      </div>
    </div>
  )
}

