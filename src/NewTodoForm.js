import React from "react";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="new-todo">Add New Todo</label>
      <input
        id="new-todo"
        name="newTodo"
        onChange={props.handleTodoChange}
        value={props.newTodo}
        style={{ border: "1px solid black" }}
      />
      <button type="submit">Add Todo Item</button>
    </form>
  );
};

export default NewTodoForm;
