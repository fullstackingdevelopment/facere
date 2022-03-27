import { View, StyleSheet } from 'react-native';
import TodoCard from './TodoCard';

export default function Body() {
  return (
    <View style={styles.bodyContainer}>
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
})
