import React, { useState } from "react";

// TodoItem Component
function TodoItem({ id, title, onDelete, onToggle, onEdit, priority, dueDate }) {
  const [isComplete, setIsComplete] = useState(false);
  const [createdAt] = useState(new Date().toLocaleDateString());
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // Handle toggle complete
  const handleToggle = () => {
    setIsComplete(!isComplete);
    onToggle(id); // Notify parent about the change
  };

  // Handle delete
  const handleDelete = () => {
    onDelete(id); // Notify parent to delete the item
  };

  // Handle edit
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(id, newTitle); // Notify parent to update the title
    setIsEditing(false);
  };

  return (
    <div
      style={{
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        backgroundColor: isComplete ? "#f0f0f0" : "white",
        textDecoration: isComplete ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px", width: "60%" }}
        />
      ) : (
        <span style={{ marginLeft: "10px" }}>{title}</span>
      )}
      <span
        style={{
          fontSize: "0.8em",
          color: "gray",
          marginLeft: "10px",
        }}
      >
        ({createdAt})
      </span>
      {dueDate && (
        <span
          style={{
            fontSize: "0.8em",
            color: new Date(dueDate) < new Date() ? "red" : "green",
            marginLeft: "10px",
          }}
        >
          Due: {dueDate}
        </span>
      )}
      <span
        style={{
          fontSize: "0.8em",
          color: priority === "high" ? "red" : priority === "medium" ? "orange" : "green",
          marginLeft: "10px",
        }}
      >
        Priority: {priority}
      </span>
      {isEditing ? (
        <button
          onClick={handleSave}
          style={{
            float: "right",
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEdit}
          style={{
            float: "right",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
      )}
      <button
        onClick={handleDelete}
        style={{
          float: "right",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

// TodoList Component (Parent)
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", priority: "high", dueDate: "2025-11-30" },
    { id: 2, title: "Practice JavaScript", priority: "medium", dueDate: "2025-12-05" },
    { id: 3, title: "Build a Todo App", priority: "low", dueDate: "2025-12-15" },
  ]);

  const [newTodo, setNewTodo] = useState({
    title: "",
    priority: "medium",
    dueDate: "",
  });

  // Handle delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle toggle
  const handleToggle = (id) => {
    console.log(`Todo with id ${id} toggled!`);
  };

  // Handle edit
  const handleEdit = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  // Handle add new todo
  const handleAddTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([
      ...todos,
      { id: newId, ...newTodo },
    ]);
    setNewTodo({ title: "", priority: "medium", dueDate: "" });
  };

  // Counter for completed/incomplete todos
  const completedCount = todos.filter((todo) => todo.isComplete).length;
  const incompleteCount = todos.length - completedCount;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Todos</h2>
      <p>
        Completed: {completedCount} | Incomplete: {incompleteCount}
      </p>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Todo Title"
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo({ ...newTodo, title: e.target.value })
          }
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <select
          value={newTodo.priority}
          onChange={(e) =>
            setNewTodo({ ...newTodo, priority: e.target.value })
          }
          style={{ marginRight: "10px", padding: "5px" }}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input
          type="date"
          value={newTodo.dueDate}
          onChange={(e) =>
            setNewTodo({ ...newTodo, dueDate: e.target.value })
          }
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          priority={todo.priority}
          dueDate={todo.dueDate}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      ))}
      {todos.length === 0 && <p>No todos left!</p>}
    </div>
  );
}

export default TodoList;