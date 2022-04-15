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

const styles = StyleSheet.create({
  bodyContainer: {
    height: '60%',
    padding: '20px',
    paddingTop: 0,
  }
})
