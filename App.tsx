//Tsx DEP
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    //View is platform independent! 
    <View>
      <Body />
      <StatusBar />
    </View>
  );
}

