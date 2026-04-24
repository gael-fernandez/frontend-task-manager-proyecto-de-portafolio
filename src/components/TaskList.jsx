function TaskList({ tareas, onUpdate, onDelete }) {
  if (tareas.length === 0) {
    return <p className="empty">No tienes tareas todavía.</p>;
  }

  return (
    <div className="task-list">
      {tareas.map((tarea) => (
        <div className="task-card" key={tarea.id}>
          <div>
            <h3>{tarea.descripcion}</h3>
            <span className={`badge ${tarea.estado.replace(" ", "-")}`}>
              {tarea.estado}
            </span>
          </div>

          <div className="task-actions">
            {tarea.estado !== "completada" && (
              <button onClick={() => onUpdate(tarea.id, "completada")}>
                Completar
              </button>
            )}

            <button className="danger" onClick={() => onDelete(tarea.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;