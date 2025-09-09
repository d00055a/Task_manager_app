import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`)     
    .then(res => setTasks(res.data));
  }, []);

  // Add a new task
  const addTask = async (title) => {
    if (!title.trim()) {
      setShowModal(true); 
      return;
    }

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/tasks`, { title });
    setTasks([...tasks, res.data]);
  };

  // Update a task
  const toggleTask = async (id, completed) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/tasks`, { completed: !completed });
    setTasks(tasks.map(t => (t._id === id ? res.data : t)));
  };

  // Update task title
  const updateTaskTitle = async (id, newTitle) => {
  if (!newTitle.trim()) return;
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/tasks`, { title: newTitle });
  setTasks(tasks.map(t => (t._id === id ? res.data : t)));
   };

  // Delete a task
  const deleteTask = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (

    <div className="app">

      <header className="app-header">
        <h1>Task Manager App</h1>
      </header>

      <section className="content">
        <p className="description">My task manager</p>

        <TaskInput addTask={addTask} />

        {tasks.length === 0 && (
            <p className="noTasks">No tasks yet. Add your first task!</p>
        )}

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          updateTaskTitle={updateTaskTitle}
          deleteTask={deleteTask}
        />
      </section>

      <footer className="app-footer">
        <p>© 2025 Daniel Dedja. All rights reserved.</p>
      </footer>

      {showModal && (
        <Modal
          message="Please enter a task before adding!"
          onClose={() => setShowModal(false)}
        />
        
      )}

    </div>

  );

}
