// This file adds the 'todos' to the 'todo' list

import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props: any) {
      super(props);
      this.state = { todoInput: '' };
  };
  handleChange = (event: any) => {
      this.setState({ todoInput: event.target.value });
  };
  handleSubmit = (event: any) => {
      event.preventDefault();
      this.props.addTodo(this.state.todoInput)
  };
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type='text'
        placeholder='Add a task' 
        value={this.state.todoInput}
        onChange={event => this.handleChange(event)}
        />
        <input type='submit' value='submit' />
      </form>
    )
  }
}