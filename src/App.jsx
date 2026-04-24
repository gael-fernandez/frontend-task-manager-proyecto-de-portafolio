import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main className="app">
      <section className="hero">
        <h1>Task Manager API</h1>
        <p>
          Frontend simple conectado a FastAPI, JWT, PostgreSQL y Render.
        </p>
      </section>

      {usuario ? (
        <Dashboard usuario={usuario} setUsuario={setUsuario} />
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <>
          <Login setUsuario={setUsuario} />

          <button className="link-button" onClick={() => setShowRegister(true)}>
            Crear cuenta nueva
          </button>
        </>
      )}
    </main>
  );
}

export default App;