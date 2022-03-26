import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header';
import Article from './components/Article';

export default function App() {
  return (
    <View>
      <Header />
      <Article />
      <StatusBar />
    </View>
  );
}
