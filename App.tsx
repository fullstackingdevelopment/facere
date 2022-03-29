//Tsx DEP
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
    height: '100%',
    paddingTop: 10,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#393E41',
  }
})
