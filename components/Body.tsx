import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import TodoList from './TodoList';

export default function Body() {
  {/* New state management */}
  const [lists, setLists] = useState({});
  const [listTitle, setListTitle] = useState('');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  function addList() {
    const newLists = {};
    // This runs if the lists object IS empty
    if (!Object.keys(lists).length) {
      newLists['0'] = {
        title: listTitle,
        tasks: [],
      };
      setLists(newLists);
    // This runs if the lists object IS NOT empty
    } else {
      let newIndex = 0;
      for (const [key, value] of Object.entries(lists)) {
        newIndex++;
        const index = key;
        newLists[index] = {
          title: value.title,
          tasks: value.tasks,
        };
        if (newIndex === Object.keys(lists).length) {
          newLists[newIndex] = {
            title: value.title,
            tasks: value.tasks,
          };
        };
        setLists(newLists);
      };
      /*const keys = Object.keys(lists);
      const biggestIndex = keys[keys.length - 1];
      const newIndex = Number(biggestIndex) + 1;
      newLists[newIndex] = {
        title: listTitle,
        tasks: [],
      };
      setLists((currLists) => {
        console.log(currLists)
      });*/
    };
  };

  function deleteList(index: number) {
    const newLists = {};
    let newIndex = 0;
    lists[index] = null;
    // Creating a new 'lists' object from non-null values
    for (const [key, value] of Object.entries(lists)) {
      if (value) {
        newLists[newIndex] = {
          title: value.title,
          tasks: value.tasks,
        };
        newIndex++;
      };
      setLists(newLists);
    };
  };

  function addTask(index: number) {
    lists[index].tasks.push([taskTitle, taskDesc]);
    setLists(lists);
  };
  {/*
  function removeList(index: number) {
    lists.splice(index, 1);
    setLists([...lists]);
  };
  */
  /*
  function updateTitle(newValue: string) {
    setNewTitle((currentTitle) => {
      return newValue;
    });
  };

  function updateDesc(newValue: string) {
    setNewDesc((currentDesc) => {
      return newValue;
    });
  }; */}

  return (
    <View>
      <View>
        <TextInput onChangeText={(text: string) => setListTitle(text)}
        style={{color: 'white'}} placeholder='Add a new project'/>
        <Ionicons onPress={() => addList()} name='add-circle' size={24} color='green' />
      </View>

      {
        Object.entries(lists).map(([index, list]) => {
          if (Object.keys(lists).length) {
            if (list) {
              return (
                <TodoList key={index} id={index}
                title={list.title} tasks={list.tasks} 
                taskHandler={addTask} deleteHandler={deleteList}
                titleHandler={setTaskTitle} descHandler={setTaskDesc}/>
              )
            }
          }
        })
      /* Rendering the to-do lists
      {
        lists.map((list: any, index: number) => {
          return (
            <TodoList key={index}
            title={list}
            tasks={tasks}
            addTask={addTask}
            updateTitle={updateTitle}
            updateDesc={updateDesc}
            removeMethod={() => removeList(index)}
            />
          )
        })
      */}
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