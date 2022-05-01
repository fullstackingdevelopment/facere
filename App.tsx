import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// LOCAL DEP
import DetailsScreen from './views/DetailsScreen';
import HomeScreen from './views/HomeScreen';

import { Linking, Button, Image,View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

function LogoTitle(navigation) {
  return (
    <View style={styles.header}>
    <Image
      style={{ width: 60, height:60 }}
      source={require('./assets/FSDLOGO.png')}
    />
    <View>
      <Text>{'     '}</Text>
    </View>

    <View >
    <View>
      <Text>{'     '}</Text>
    </View>
    <Button
          style={styles.btn}
          title="Facere App"
          color= '#150D23'
          onPress={() => navigation.navigate('Details')}
          onClick={() =>navigation.navigate('Details')}
    />
     <View >
        <Text>{'     '}</Text>
      </View>
    </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Stack.Screen
      name="Details" 
      component={DetailsScreen} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    padding: '2px',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn:{
    color: '#FFFDA1',
    backgroundColor: '#181818',
    width: '5px',
    height: '5px',
  },
});