import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={[styles.date, styles.baseFont]}>Sat, March 26</Text>
      <Text style={[styles.header, styles.baseFont]}>Hi, John</Text>
      <Text style={[styles.location, styles.baseFont]}>/ HOME</Text>
      <View style={styles.menuItems}>
        <Text style={[styles.settingsButton, styles.location, styles.baseFont]}>settings</Text>
        <Text style={[styles.settingsButton, styles.location, styles.baseFont]}>workspace</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '20px',
  },
  baseFont: {
    fontFamily: 'Bantayog',
    color: '#E6DED4',
    fontWeight: 'bold',
  },
  settingsButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 50,
  },
  date: {
    letterSpacing: '4px',
  },
  location: {
    fontSize: 15,
    letterSpacing: '8px',
  },
  menuItems: {
    display: 'inline',
    marginTop: 10,
  }
})
