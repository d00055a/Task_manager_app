# Task Manager App

A full-stack **Task Management Application** built with **React** on the frontend and **Node.js + Express** on the backend, using **MongoDB** for data persistence.

The application demonstrates full **CRUD functionality**, RESTful API communication and a clean, responsive user interface for managing daily tasks.


## Features

- Create new tasks

- Update existing tasks

- Mark tasks as completed (toggle)

- Delete tasks

- Input validation with modal feedback for empty submissions

- Persistent data storage using MongoDB

- Responsive UI with custom CSS styling  

## Architecture

- **Frontend**: React (GitHub Pages)

- **Backend**: Node.js + Express (Render)

- **Database**: MongoDB Atlas

- **Communication**: REST API using Axios

## Tech stack

**Frontend**

- **React** – UI library

- **Axios** – API communication

- **CSS3** – Custom styling & responsive design

**Backend**

- **Node.js** – Server runtime

- **Express.js** – REST API framework

- **MongoDB & Mongoose** – Database & ODM

- **CORS** – Cross-origin resource sharing

- **dotenv** – Environment variable management

- **morgan** – HTTP request logging

## Deployment

**Platforms**
- GitHub Pages(frontend)
- Render(backend)
- MongoDB Atlas(database) <br><br>

## Live demo

**Frontend**: https://d00055a.github.io/task-manager-app/ <br>

**Backend API**: https://task-api-4e4u.onrender.com (Hosted on Render) <br><br>

- Note: The backend is hosted on Render (free tier), so the first request may take up to 1 minute to wake up.
  
## Run Locally

- **Clone the repositories**

```bash
git clone https://github.com/d00055a/task-manager-app.git
git clone https://github.com/d00055a/task-manager-backend.git
``` 

- **Install dependencies**

**Frontend**
```bash
cd task-manager-app
npm install
```

**Backend**
```bash
cd ../task-manager-backend
npm install
```


- **Configure environment variables**

**Frontend** (task-manager-app/.env):

```Env
REACT_APP_API_URL=http://localhost:5000
```

**Backend** (task-manager-backend/.env):

```Env
MONGO_URI=mongodb_connection_string
PORT=5000
```

- **Run the application**

**Backend**
```bash
cd task-manager-backend
node server.js
```

**Frontend**
```bash
cd ../task-manager-app
npm start
```

## Purpose

This project was built to practice and demonstrate:

- Full-stack CRUD operations

- RESTful API development

- Frontend–backend integration

- MongoDB data persistence

- Real-world project structure and deployment

