

import { useState } from "react";

export default function TaskList({ tasks, toggleTask, deleteTask, updateTaskTitle }) {
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (task) => {
    setEditingId(task._id);
    setNewTitle(task.title);
  };

  const handleSave = (id) => {
    updateTaskTitle(id, newTitle);
    setEditingId(null);
    setNewTitle("");
  };

  return (

    <ul>

      {tasks.map((task) => (

        <li
  key={task._id}
  className={task.completed ? "completed" : ""}
  onClick={(e) => {
    const clickedElement = e.target;
    if (
      clickedElement.classList.contains("editBtn") ||
      clickedElement.classList.contains("deleteBtn") ||
      clickedElement.classList.contains("saveBtn") ||
      clickedElement.tagName === "INPUT"
    ) {
      return;
    }
    toggleTask(task._id, task.completed);
  }}
>
  
<div className="taskContent">
  {editingId === task._id ? (
    <div className="editColumn">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="saveBtn"
        onClick={(e) => {
          e.stopPropagation();
          handleSave(task._id);
        }}
      >
        Save
      </button>
    </div>
  ) : (
    <span>{task.title}</span>
  )}

</div>


  {editingId !== task._id && (
    <div className="taskActions">
      <button
        className="editBtn"
        onClick={(e) => {
          e.stopPropagation();
          handleEdit(task);
        }}
      >
        Edit
      </button>
      <button
        className="deleteBtn"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task._id);
        }}
      >
        X
      </button>
    </div>
  )}
</li>


      ))}

    </ul>
  );

}
