import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function TodoCard() {

  return (
    <View style={styles.todoCardContainer}>
      <AntDesign style={styles.vendorLogo} name="github" size={24} color="black" />
      <Text>John69/GCC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoCardContainer: {
    width: '20%',
    padding: 10,
    display: 'inline',
    backgroundColor: '#E6DED4',
  },
  vendorLogo: {
    display: 'inline',
  }
});
