import { View } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';

export default function Facere() {
  return (
    <View style={{
      paddingVertical: 20,
      paddingHorizontal: 70,
      backgroundColor: '#1B1A1A',
    }}>
      <Header />
      <Body />
    </View>
  )
}