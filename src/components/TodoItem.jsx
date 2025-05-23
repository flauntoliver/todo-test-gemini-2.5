import React from "react";

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <span
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(index)}
        className="px-3 py-1 text-sm text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white"
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
