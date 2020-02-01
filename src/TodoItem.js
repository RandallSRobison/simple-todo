import React from 'react';

const TodoItem = (props) => {
    const {todo, index} = props;
    return(
        <li key={todo.title}>
            <input
              type="checkbox"
              onChange={e => props.toggleTodoDone(e, index)}
              checked={todo.done}
            />
            <span className={todo.done ? "done" : null}>{todo.title}</span>
            <button onClick={() => props.removeTodo(index)}>Remove</button>
          </li>
    )
}

export default TodoItem;