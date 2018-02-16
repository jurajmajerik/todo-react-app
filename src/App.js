import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Do one', isComplete: true},
        {id: 2, name: 'Do two', isComplete: false},
        {id: 3, name: 'Do three', isComplete: false}
      ],
      currentTodo: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({ currentTodo: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h2>React Todos</h2>
      <div className="Todo-App">
        <TodoForm
          handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}/>
      </div>
      <div className="Todo-List">
      <ul>
        {this.state.todos.map(todo =>
        <li key={todo.id}>
          <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
        </li>)}
      </ul>
      </div>
      </div>
    );
  }
}

export default App;
