import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function TodoCard() {

  return (
    <View >
      <View >
        <AntDesign name="github" size={24} color="black" />
        <Text>John69/GCC</Text>
      </View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repellat.</Text>
    </View>
  );
};

