import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";

export default function App() {

//---------------- Elemento JSX "App" ----------------
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-principal">
        <ListaDeTareas />
      </div>
    </div>
  );
}
