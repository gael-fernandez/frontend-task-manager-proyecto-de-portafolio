import { useState } from "react";

function TaskForm({ onCreate }) {
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("pendiente");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descripcion.trim()) return;

    onCreate(descripcion, estado);
    setDescripcion("");
    setEstado("pendiente");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">En progreso</option>
        <option value="completada">Completada</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;