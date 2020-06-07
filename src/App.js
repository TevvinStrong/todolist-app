import React from 'react'; /* Importing React */
import Header from './components/layout/header.js' /* Importing Header Component */
import AddTodo from './components/todos/AddTodo' /* Importing AddTodo Component */
import Todos from './components/todos/Todos.js' /* Importing Todos component */

import './App.css'; /* Importing App.css */

class App extends React.Component {
  state = { /* State is a object that holds an array of objects */
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Take Bhodi out for a walk",
        completed: false
      },
      {
        id: 3,
        title: "Get more dog food for Bhodi",
        completed: false
      }
    ]
  }
  //Mark Item Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
}

  //Delete Todo Item
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

    render() {
      return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
        </div>
      );
  }

}

export default App;
