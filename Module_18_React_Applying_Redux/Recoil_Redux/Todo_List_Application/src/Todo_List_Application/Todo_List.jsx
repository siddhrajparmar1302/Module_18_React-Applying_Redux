import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./Todo_State";

const Todo_List = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [task, setTask] = useState("");

  // Add a New Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear input field
  };

  // Mark Task as Completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a Task
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Recoil Todo List</h2>
      
      
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <button onClick={addTask} style={{ padding: "10px", fontSize: "16px", marginLeft: "10px" }}>
        Add
      </button>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0", fontSize: "18px" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              style={{ marginRight: "10px" }}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => removeTask(todo.id)} style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "14px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_List;
