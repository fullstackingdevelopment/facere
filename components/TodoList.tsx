import { View, Text, StyleSheet } from 'react-native';
import TodoCard from './TodoCard';

export default function TodoList() {
  return (
    <View>
      <Text >/ Github</Text>
      <View >
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </View>
    </View>
  );
};
