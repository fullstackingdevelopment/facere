import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type TodoCardProps = {
  title: string,
  status: string,
  desc: string,
  removeMethod: Function,
};

export default function todoCard({ title = 'test', status = 'unchanged', desc, removeMethod }: TodoCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        {/* <AntDesign style={styles.vendorLogo} name="github" size={24} color="black" /> */}
        {/* The remove task button */}
        <Ionicons onClick={() => removeMethod()} name='remove-circle' size={24} color='red' />
        <Text style={[styles.taskTitle, styles.baseFont]}>{ title }</Text>
      </View>
      {/*<View style={styles.cardBody}>
        <Text style={[styles.task, styles.baseFont]}>src/main.rs <Text style={[styles.status, styles.baseFont]}>{status}</Text></Text>
      </View>*/}
      <Text style={[styles.baseFont, styles.taskDescription]}>{ desc }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '20%',
    margin: 10,
    padding: 20,
    backgroundColor: '#E6DED4',
  },
  baseFont: {
   
    fontWeight: 'bold',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  taskTitle: {
    letterSpacing: 2,
    marginLeft: '10px',
    fontSize: 20,
  },
  // Portion of the card after the image and task title
  cardBody: {
    marginTop: '10px',
  },
  // The text which tells where the task is
  task: {
    fontSize: 12,
    letterSpacing: 2,
  },
  status: {
    fontSize: 12,
    
    color: 'red',
    marginTop: 2,
    letterSpacing: 2,
  },
  taskDescription: {
    marginTop: 5,
    fontWeight: '500',
  }
});