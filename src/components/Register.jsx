import { useState } from "react";
import { register } from "../api/api";

function Register({ setShowRegister }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!nombre || !password) {
      setError("Completa nombre y contraseña.");
      return;
    }

    try {
      await register(nombre, password);
      alert("Usuario creado ");
      setShowRegister(false);
    } catch (error) {
      setError(error.message || "Error al crear usuario.");
    }
  };

  return (
    <div className="card">
      <h2>Crear cuenta</h2>
      <p className="muted">Regístrate para empezar a crear tareas.</p>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleRegister} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Crear cuenta</button>
      </form>

      <button className="secondary" onClick={() => setShowRegister(false)}>
        Ya tengo cuenta
      </button>
    </div>
  );
}

export default Register;