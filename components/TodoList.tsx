import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TodoCard from './TodoCard';

type TodoListProps = {
  title: string,
  removeMethod: Function,
};

export default function TodoList({ title, removeMethod }: TodoListProps) {
  {/* The states for the title and description of a task */}
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  {/* The state for the task itself */}
  const [tasks, setTasks] = useState([]);
  {/* The state for 'createTaskContainer' */}
  const [visibleMenu, setVisibleMenu] = useState(false);

  function createNewTask() {
    setTasks((currTasks) => {
      return [...currTasks, [newTitle, newDesc]];
    });
  };

  function removeTask(index: number) {
    tasks.splice(index, 1);
    setTasks((currTasks) => {
      return [...tasks];
    });
  };

  function showCreateTaskMenu() {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <View style={styles.TodoList}>
      {/* The create task menu */}
      {
        !visibleMenu ? null :
        (
          <View style={styles.createTaskContainer}>
            <TextInput style={styles.input} placeholder='Add a new task' onChangeText={(text: string) => setNewTitle(text)}/>
            <TextInput style={styles.desc} placeholder='Add a description' onChangeText={(text: string) => setNewDesc(text)} />
            <Ionicons style={styles.button} onClick={() => createNewTask()} name='md-checkmark-circle' size={24} color='green' />
          </View>
        )
      }
      {/* The head of the to-do list */}
      <View style={styles.TodoListHead}>
        <Text style={styles.Todo}>/ {title}</Text>
        <Ionicons style={styles.button} onClick={() => showCreateTaskMenu()} name='add-circle' size={24} color='green' />
        <Ionicons style={styles.button} onClick={() => removeMethod()} name='remove-circle' size={24} color='red' />
      </View>
      {/* Rendering the "Todo" State */}
      <View style={styles.Todos}>
        {
          tasks.map((task: object, index: number) => {
            return (
              <TodoCard key={index} title={task[0]} desc={task[1]} removeMethod={() => removeTask(index)}/>
            )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TodoListHead: {
    display: 'flex',
    flexDirection: 'row',
  },
  Todo: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 40,
    letterSpacing: 4,
    fontFamily: 'Bantayog',
    color: '#E6DED4',
  },
  Todos: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginTop: 30,
    marginLeft: 20,
  },
  createTaskContainer: {
    width: 150,
    marginTop: 30,
    backgroundColor: '#E6DED4',
  },
  input: {
    height: 30,
    width: 150,
  },
  desc: {
    height: 100,
    width: 150,
  },
});
