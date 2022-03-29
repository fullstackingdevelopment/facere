import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import TodoList from './TodoList';
import isValidInput from './isValidInput';

export default function Body() {
  const [newList, setNewList] = useState();
  const [lists, setLists] = useState([]);

  function addList() {
    setLists([...lists, newList]);
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.newTaskContainer}>
        <TextInput placeholder='Add a new project' onChangeText={(text: string) => setNewList(text)}></TextInput>
        <button onClick={() => addList()}>ADD</button>
      </View>

      {/* Rendering the to do lists */}
      {
        lists.map((list: string, index: number) => {
          return (
            <TodoList key={index} title={list} />
          )
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    height: '60%',
    padding: '20px',
    paddingTop: 0,
  },
  newTaskContainer: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#E6DED4',
  }
})
