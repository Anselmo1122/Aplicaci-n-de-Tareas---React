import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

// Retos;

/* 
  1 - Almacenar la tareas del usuario.
  2 - Crear esta aplicación con otro enfoque, crearla sin un componente intermedio.
*/