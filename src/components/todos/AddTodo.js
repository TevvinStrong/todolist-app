import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form style={formStyles} onSubmit={this.onSubmit}>
              <input style={inputStyles} type="text" name="title" placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange}></input>
              <input style={submitStyles} type="submit" value="Submit Todo" className="btn"></input>
            </form>
        )
    }
}

// Stylesheet for form
const formStyles = {
    display: 'flex'
}
// Stylesheet for input(AddTodo)
const inputStyles = {
    width: '100%',
    padding: '5px',
    flex: '10'
}
// Stylesheet for input(submiitbtn)
const submitStyles ={
    flex: '1'
}

export default AddTodo
