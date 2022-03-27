import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function TodoCard() {

  return (
    <View style={styles.todoCardContainer}>
      <View style={styles.cardHeader}>
        <AntDesign style={styles.vendorLogo} name="github" size={24} color="black" />
        <Text>John69/GCC</Text>
      </View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repellat.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoCardContainer: {
    height: 150,
    width: '20%',
    margin: 10,
    padding: 10,
    backgroundColor: '#E6DED4',
  },
  cardHeader: {
    display: 'inline',
  },
});
