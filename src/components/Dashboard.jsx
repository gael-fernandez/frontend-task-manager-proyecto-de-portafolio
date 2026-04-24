import { useEffect, useState } from "react";
import { getTareas, createTarea, updateTarea, deleteTarea } from "../api/api";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard({ usuario, setUsuario }) {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState("");

  const cargarTareas = async () => {
    try {
      const data = await getTareas();
      setTareas(data);
    } catch (error) {
      setError(error.message || "Error al cargar tareas.");
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const handleCreate = async (descripcion, estado) => {
    try {
      await createTarea(descripcion, estado);
      await cargarTareas();
    } catch (error) {
      setError(error.message || "Error al crear tarea.");
    }
  };

  const handleUpdate = async (id, estado) => {
    try {
      await updateTarea(id, estado);
      await cargarTareas();
    } catch (error) {
      setError(error.message || "Error al actualizar tarea.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTarea(id);
      await cargarTareas();
    } catch (error) {
      setError(error.message || "Error al eliminar tarea.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Hola, {usuario.nombre} </h2>
          <p className="muted">Administra tus tareas personales.</p>
        </div>

        <button className="secondary" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <TaskForm onCreate={handleCreate} />

      <TaskList
        tareas={tareas}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Dashboard;