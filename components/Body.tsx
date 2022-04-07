import { View, StyleSheet } from 'react-native';
import TodoList from './TodoList';

export default function Body() {
  return (
    <View >
      <TodoList />
      <TodoList />
      <TodoList />
    </View>
  );
};

