// This file loads the 'todos'

import React from 'react';
import { View } from 'react-native';

export default function TodoList(props: any) {
  return (
    <View>
      <ul>
        {/*
        Rendering each 'todo' one by one
        */}
        {props.todos.map((task: any) => (
          <li task={task} key={task}>{task}</li>
        ))}
      </ul>
    </View>
  )
}