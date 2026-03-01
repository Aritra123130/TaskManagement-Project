📝 Full Stack Task Management Application

A full-stack Task Management Application built using React (Vite) for Frontend and Node.js + Express + MongoDB for Backend.

The application supports complete CRUD operations along with JWT-based Authentication and Authorization middleware to secure all protected routes.

🚀 Overview

This project demonstrates:

Full-stack MERN architecture

RESTful API development

JWT Authentication

Middleware-based route protection

User-specific task management

Frontend–Backend integration

All task routes are protected using authentication middleware. Only authorized users can access and manage their tasks.

🛠️ Tech Stack
🔹 Frontend

React (Vite)

JavaScript (ES6+)

Axios

CSS / Tailwind (if used)

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt

dotenv

CORS

✨ Features

🔐 User Registration & Login

🛡️ JWT-based Authentication

🔒 Protected Routes via Auth Middleware

✅ Create tasks

📋 View tasks

✏️ Update tasks

❌ Delete tasks

👤 User-specific data isolation

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
🔹 Backend Setup (Port 3000)
cd server
npm install

Create .env inside server/:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:

npm run dev

Backend runs on:

http://localhost:3000
🔹 Frontend Setup (Vite – Port 5173)
cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173

