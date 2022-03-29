import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TodoCard from './TodoCard';

export default function TodoList({ title }) {
  {/* The states for the title and description of a task */}
  const [newTitle, setNewTitle] = useState();
  const [newDesc, setNewDesc] = useState();

  {/* The state for the task itself */}
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, [newTitle, newDesc]]);
  };

  return (
    <View>
      <View style={styles.listHead}>
        <Text style={styles.Todo}>/ {title}</Text>
      </View>
      <View style={styles.TodoList}>
        {
          tasks.map((task: object, index: number) => {
            return (
              <TodoCard key={index} title={task[0]} desc={task[1]} />
            )
          })
        }
      </View>
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Add a new task' onChangeText={(text: string) => setNewTitle(text)} />
          <TextInput style={styles.desc} placeholder='Add a description' onChangeText={(text: string) => setNewDesc(text)} />
          <View style={styles.button} onClick={() => addTask()}>
            <Ionicons name='md-checkmark-circle' size={24} color='green' />
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 40,
    letterSpacing: '4px',
    fontFamily: 'Bantayog',
    color: '#E6DED4',
  },
  TodoList: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputContainer: {
    width: 150,
    display: 'flex',
    flexDirection: 'column',
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
