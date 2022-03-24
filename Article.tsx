// This file loads the 'article' part of the body

import React from 'react';
import {View, StyleSheet } from 'react-native';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Article.css';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: ['sleep', 'eat']
    };
  };
  addTodo = (todo: any) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }))
  };
  render() {
    return (
      <View style={[styles.center, {top: 50}]}>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos ={this.state.todos}/>
      </View>
    )
  };
};