import React from 'react'; /* Importing React */
import TodoItem from '../todos/TodoItem.js'; /* Importing TodoItem Component */
import PropTypes from 'prop-types'; /* Importing Proptypes */

class Todos extends React.Component {
    markComplete = () => {
        console.log("Clicked!")
    }

    render() {
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
      ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;