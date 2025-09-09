
import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle(""); 
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        className="taskInput"
        type="text"
        value={title}
        placeholder="Enter a task"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="addButton" type="submit">Add</button>

    </form>

  );
  
}
