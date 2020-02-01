import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
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
    todos[index] = {
      ...todos[index],
      done: e.target.checked // update done property on copied todo
    }; // copy the todo
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
        title: todo.title, //can also do ...todo
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
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          handleTodoChange={this.handleTodoChange.bind(this)}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <button onClick={() => this.removeAll()}>Remove All</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
