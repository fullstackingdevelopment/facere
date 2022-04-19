import * as React from 'react';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { Button, Image,View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

// LOCAL DEP
import Header from '../components/Header';
import Body from '../components/Body';

import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

export default function DetailsScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      
     <Header/>
     <Body/>
     <TouchableWithoutFeedback>
     <Image source={{ height:300, width:200, uri: "https://picsum.photos/200/300"}}/>
     </TouchableWithoutFeedback>

     <Button
          title="Home"
          color= '#150D23'
          onPress={() => navigation.dispatch(StackActions.popToTop())}
          onClick={() => navigation.dispatch(StackActions.popToTop())}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B1A1A',
  },
  maintxt: {
    color:'white',
  }
})

