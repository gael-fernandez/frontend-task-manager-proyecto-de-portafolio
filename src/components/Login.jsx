import { useState } from "react";
import { login, getProfile } from "../api/api";

function Login({ setUsuario }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!nombre || !password) {
      setError("Completa nombre y contraseña.");
      return;
    }

    try {
      const data = await login(nombre, password);

      localStorage.setItem("token", data.access_token);

      const perfil = await getProfile();
      setUsuario(perfil);
    } catch (error) {
      setError(error.message || "Credenciales incorrectas.");
      localStorage.removeItem("token");
    }
  };

  return (
    <div className="card">
      <h2>Iniciar sesión</h2>
      <p className="muted">Accede a tu gestor de tareas.</p>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin} className="form">
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

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;