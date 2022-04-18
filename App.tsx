//Tsx DEP
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

// Components
import Header from './components/Header';
import Body from './components/Body';

// Fonts
import "./assets/fonts/Bantayog-Regular.otf";


export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.maintxt}>Hello</Text>
     <Text style={styles.maintxt}>Hello</Text>
     <Text style={styles.maintxt}>Hello</Text>
     <Text style={styles.maintxt}>Hello</Text>
     <Text style={styles.maintxt}>Hello</Text>
     <Text style={styles.maintxt}>Hello</Text>
      
      
    
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
  },
  maintxt: {
    color:'white',
  }
})
