import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { Button, Image, View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';




export default function HomeScreen({ navigation }) {
  return (
    
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#181818',
    }}>
      <Image
        style={{ width: '90%', height: '90%' }}
        source={require('../assets/FSD.png')}
      />
     
        <Text style={{
          color: '#FFFDA1',
        }}>Project 1</Text>
        <Button
          style={{
            color: '#FFFDA1',
            backgroundColor: '#181818',
            border: '10px solid #130D1D',
          }}
          title="Facere App"
          onPress={() => navigation.navigate('Details')}
        />
     
    </View>

  );
}

