import React from 'react'; /* Importing React */
import Todos from './components/Todos.js' /* Importing Todos component */

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

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
}

    render() {
      return (
        <div className="App">
            <Todos todos={this.state.todos} markComplete={this.markComplete} />
        </div>
      );
  }

}

export default App;
