import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL || "https://task-api-4e4u.onrender.com";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Get tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/tasks`);
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err.response?.data || err.message);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (title) => {
    if (!title.trim()) {
      setShowModal(true);
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/api/tasks`,
        { title: title.trim(), completed: false }
      );
      setTasks([...tasks, res.data]);
    } catch (err) {
      console.error("Error adding task:", err.response?.data || err.message);
    }
  };

  // Toggle completed
  const toggleTask = async (id, completed) => {
    try {
      const res = await axios.put(`${API_URL}/api/tasks/${id}`, {
        completed: !completed,
      });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("Error updating task:", err.response?.data || err.message);
    }
  };

  // Update task title
  const updateTaskTitle = async (id, newTitle) => {
    if (!newTitle.trim()) return;

    try {
      const res = await axios.put(`${API_URL}/api/tasks/${id}`, {
        title: newTitle.trim(),
      });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("Error updating task title:", err.response?.data || err.message);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err.response?.data || err.message);
    }
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
