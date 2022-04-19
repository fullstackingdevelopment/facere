import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// LOCAL DEP
import DetailsScreen from './views/DetailsScreen';
import HomeScreen from './views/HomeScreen';

import { Button, Image,View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

function LogoTitle() {
  return (
    
    <Image
      style={{ width: 60, height:60 }}
      source={require('./assets/FSDLOGO.png')}
    />
    
    
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="FullStack-ingDevelopment" 
        component={HomeScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}