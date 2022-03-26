import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Facere</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  header: {
    padding: 10,
    fontSize: 30,
    color: 'white',
  },
})