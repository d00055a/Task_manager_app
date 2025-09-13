# Task Manager App

A full-stack **CRUD application** built with **React (frontend)**, **Node.js + Express (backend)** and **MongoDB (database)**.<br>
Designed to help users manage tasks efficiently with a clean UI and real-time updates.<br><br>  


## Features
- Add new tasks  
- Mark tasks as completed (toggle)  
- Edit existing tasks  
- Delete tasks  
- Validation with modal popup when trying to add an empty task  
- Data stored in MongoDB  
- Responsive UI with custom styling <br><br>  


## Tech stack

**Frontend**
- React
- Axios
- CSS3 (custom styling) 

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS, dotenv, morgan <br><br>

## Deployment

**Platforms**
- GitHub Pages(frontend)
- Render(backend)
- MongoDB Atlas(database) <br><br>

## Live demo

**Frontend**: https://d00055a.github.io/Task_manager_app/ <br>

**Backend API**: https://task-api-4e4u.onrender.com (Hosted on Render) <br><br>

## Local setup

1. **Clone the repository**

```bash
git clone https://github.com/d00055a/Task_manager_app.git
git clone https://github.com/d00055a/Task_manager_backend.git
``` 

2. **Install dependencies**


```bash
# Frontend
cd Task_manager_app
npm install
```


```bash
# Backend
cd ../Task_manager_backend
npm install
```


3. **Configure environment variables**

In Task_manager_app/.env:

```Env
REACT_APP_API_URL=http://localhost:5000
```

In Task_manager_backend/.env:

```Env
MONGO_URI=mongodb_connection_string
PORT=5000
```

4. **Run both servers**

```bash
# Backend
cd Task_manager_backend
node server.js
```

```bash
# Frontend
cd ../Task_manager_app
npm start
```


License © 2025 Daniel Dedja. All rights reserved.

