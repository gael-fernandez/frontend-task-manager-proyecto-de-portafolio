# Task Manager Frontend ⚛️

A simple and clean frontend built with React to interact with a JWT-secured backend API.

This project demonstrates how to connect a frontend application to a real backend with authentication, protected routes, and full CRUD functionality.

---

## 📌 Overview

This frontend allows users to:

- Register and log in
- Store authentication tokens
- View their personal tasks
- Create, update, and delete tasks
- Interact with a live deployed backend API

The application is fully connected to a production backend and database.

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Fetch API
- Vercel (Frontend deployment)

---

## 🔐 Authentication

Authentication is handled using JWT.

- The token is stored in `localStorage`
- It is sent in each request via:

```http
Authorization: Bearer <token>
This ensures that all operations are tied to the authenticated user.
🌐 Live Demo

Frontend:

https://frontend-task-manager-proyecto-de-p.vercel.app/

Backend API:

https://task-manager-088u.onrender.com

🔗 Backend Repository

https://github.com/gael-fernandez/task-manager

⚠️ Notes

The backend is hosted on Render's free tier.
After inactivity, the first request may take a few seconds while the server wakes up.

Once active, the application performs normally.
▶️ Run Locally
git clone https://github.com/gael-fernandez/frontend-task-manager-proyecto-de-portafolio
cd frontend-task-manager-proyecto-de-portafolio
npm install
npm run dev
📈 Future Improvements
UI/UX enhancements
Better error handling
Token expiration handling
State management improvements
👨‍💻 Author

Developed by Gael Fernández as part of a fullstack portfolio project.
