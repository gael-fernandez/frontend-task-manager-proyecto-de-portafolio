const BASE_URL = "https://task-manager-088u.onrender.com";

export const getToken = () => localStorage.getItem("token");

const handleResponse = async (res) => {
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail || "Error en la petición");
  }

  return data;
};

export const login = async (nombre, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, password }),
  });

  return handleResponse(res);
};

export const register = async (nombre, password) => {
  const res = await fetch(`${BASE_URL}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, password }),
  });

  return handleResponse(res);
};

export const getProfile = async () => {
  const res = await fetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return handleResponse(res);
};

export const getTareas = async () => {
  const res = await fetch(`${BASE_URL}/tareas`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return handleResponse(res);
};

export const createTarea = async (descripcion, estado) => {
  const res = await fetch(`${BASE_URL}/tareas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ descripcion, estado }),
  });

  return handleResponse(res);
};

export const updateTarea = async (id, estado) => {
  const res = await fetch(`${BASE_URL}/tareas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ estado }),
  });

  return handleResponse(res);
};

export const deleteTarea = async (id) => {
  const res = await fetch(`${BASE_URL}/tareas/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return handleResponse(res);
};