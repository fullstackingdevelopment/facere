import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import TodoList from './TodoList';

export default function Body() {
  const [newList, setNewList] = useState('');
  const [lists, setLists] = useState([]);

  function addList() {
    setLists([...lists, newList]);
  };

  function removeList(index: number) {
    lists.splice(index, 1);
    setLists([...lists]);
  };

  return (
    <View>
      <View>
        <TextInput style={{color: 'white'}} placeholder='Add a new project' onChangeText={(text: string) => setNewList(text)} />
        {/* The button we use to add to-do lists */}
        <Ionicons onPress={() => addList()} name='add-circle' size={24} color='green' />
      </View>

      {/* Rendering the to-do lists */}
      {
        lists.map((list: string, index: number) => {
          return (
            <TodoList key={index} title={list} removeMethod={() => removeList(index)}/>
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
});