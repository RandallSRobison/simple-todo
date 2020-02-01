import React from "react";
import TodoItem from "./TodoItem.js";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
