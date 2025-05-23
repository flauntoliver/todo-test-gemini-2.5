import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul className="list-none p-0 m-0">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
