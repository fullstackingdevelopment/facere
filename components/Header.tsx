import { View, Text, StyleSheet } from 'react-native';
import "../assets/fonts/Bantayog-Regular.otf";
import "../assets/fonts/fonts.css";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>SAT, MARCH 26</Text>
      <Text style={styles.header}>Hi, John</Text>
      <Text style={styles.home}>/ HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Bantayog",
    fontSize: 50,
    color: '#E6DED4',
  },
  date: {
    fontSize: 25,
    color: '#E6DED4'
  },
  home: {
    fontSize: 15,
    color: '#E6DED4',
  },
})
