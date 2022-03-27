import { View, Text, StyleSheet } from 'react-native';
import TodoCard from './TodoCard';

export default function TodoList() {
  return (
    <View>
      <Text style={styles.Todo}>/ Github</Text>
      <View style={styles.TodoList}>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 40,
    color: '#E6DED4',
  },
  TodoList: {
    display: 'flex',
    flexDirection: 'row',
  },
});