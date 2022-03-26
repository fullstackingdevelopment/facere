import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const editInputRef = useRef();

  function addTodo(task: string) {
    {/* Checking for an empty string */}
    if (task.match(/^\s+$/) || task === '') return null;

    {/* Since there's no previous task in an empty state, there's this error here,
    but it's harmless as far as i know */}
    clearInput();
    setTodos((prevTasks: string[]) => {
      return [...prevTasks, task];
    });
  };

  function delTodo(index: number) {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  function clearInput() {
    {/* I don't know why this error pops up, at least the code works */}
    inputRef.current.value = '';
  };

  return (
    <View>
      <Text>Tasks you haven't completed yet:</Text>

      {/* The task component */}
      <View style={styles.taskContainer}>

        {/* Rendering the tasks */}
        {
          todos.map((task: string, index: number) => {
            return (
              <View key={index}>
                <Text>{task}</Text>
                <View style={styles.buttonContainer}>

                  {/* The delete button for the task */}
                  <View key={index} style={styles.delButton} onClick={() => delTodo(index)}>
                    <MaterialIcons name='arrow-back' size={15} color='black'></MaterialIcons>
                  </View>

                  {/* The task editor area */}
                  <TextInput key={index} style={styles.input} ref={editInputRef} placeholder='Modify this task'></TextInput>
                  <View style={styles.addButton} onClick={() => console.log(editInputRef.current.value)}>
                    <MaterialIcons name='keyboard-arrow-up' size={15} color='black'></MaterialIcons>
                  </View>
                </View>
              </View>
            );
          })
        }
      </View>

      {/* The input area to create new tasks */}
      <TextInput style={styles.input} ref={inputRef} placeholder='Add a todo'></TextInput>

      {/* The button that adds new tasks to the 'todos' state */}
      {/* I don't know why these errors exist */}
      <View style={styles.addButton} onClick={() => addTodo(inputRef.current.value)}>
        <MaterialIcons name='keyboard-arrow-up' size={24} color='black'></MaterialIcons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    margin: 20,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  buttonContainer: {
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  addButton: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  delButton: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 5,
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});