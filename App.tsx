import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Header />
      <Body />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#1B1A1A',
  }
})
