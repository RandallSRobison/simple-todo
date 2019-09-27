import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Simple Todo App",
      newTodo: "",
      todos: []
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  handleTodoChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  formSubmitted(e) {
    e.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  toggleTodoDone(e, index) {
    // console.log(e.target.checked);
    const todos = [...this.state.todos]; // copy the array
    todos[index] = { ...todos[index] }; // copy the todo
    todos[index].done = e.target.checked; // update done property on copied todo
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy of the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  removeAll() {
    this.setState({
      todos: []
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="new-todo">Add New Todo</label>
          <input
            id="new-todo"
            name="newTodo"
            onChange={this.handleTodoChange}
            value={this.state.newTodo}
            style={{ border: "1px solid black" }}
          />
          <button type="submit">Add Todo Item</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <button onClick={() => this.removeAll()}>Remove All</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  type="checkbox"
                  onChange={e => this.toggleTodoDone(e, index)}
                  checked={todo.done}
                />
                {/* <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span> */}
                <span className={todo.done ? "done" : null}>{todo.title}</span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
