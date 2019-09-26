import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "thousand sunny",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Sleep",
          done: false
        }
      ]
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

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="new-todo">Add New Item</label>
          <input
            id="new-todo"
            name="newTodo"
            onChange={this.handleTodoChange}
            placeholder="new todo"
            value={this.state.newTodo}
            style={{ border: "1px solid black" }}
          />
          <button type="submit">add todo item</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
