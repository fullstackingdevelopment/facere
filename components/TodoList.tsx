import { View, Text, StyleSheet } from 'react-native';
import TodoCard from './TodoCard';

export default function TodoList() {
  return (
    <View>
      <Text style={styles.Todo}>/ GITHUB</Text>
      <View style={styles.TodoList}>
        <TodoCard title="JOHN69/CC" status="unchanged" />
        <TodoCard title="WEEGEE/TEST" />
        <TodoCard title="WEEGEE/TEST" />
        <TodoCard title="WEEGEE/TEST" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 40,
    letterSpacing: '4px',
    fontFamily: 'Bantayog',
    color: '#E6DED4',
  },
  TodoList: {
    display: 'flex',
    flexDirection: 'row',
  },
});
