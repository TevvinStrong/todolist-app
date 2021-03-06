import React, { Component } from 'react' /* Importing React */
import PropTypes from 'prop-types'; /* Importing Proptypes */

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
                    {this.props.todo.title}
                    <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%'
}

export default TodoItem
