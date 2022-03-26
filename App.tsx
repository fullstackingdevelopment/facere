import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './Header';
import Article from './Article';

export default function App() {
  return (
    <View>
      <Header />
      <Article />
      <StatusBar />
    </View>
  );
}