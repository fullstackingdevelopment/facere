//Tsx DEP
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

// Components
import Header from './components/Header';
import Body from './components/Body';

// Fonts
import "./assets/fonts/Bantayog-Regular.otf";
import "./assets/fonts/fonts.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 10,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#1B1A1A',
  }
})
