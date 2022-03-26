import { View, StyleSheet } from 'react-native';
import TodoList from './TodoList';

export default function Article() {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'white',
  }
})