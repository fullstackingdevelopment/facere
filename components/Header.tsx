import { View, Text, StyleSheet } from 'react-native';
import "../assets/fonts/Bantayog-Regular.otf";
import "../assets/fonts/fonts.css";

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
    fontFamily: "Bantayog",
    fontSize: 30,
    color: 'white',
  },
})
