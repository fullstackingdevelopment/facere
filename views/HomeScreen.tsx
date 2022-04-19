import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { ScrollView,Button, Image, View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, Dimensions } from 'react-native';


let screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    
    <ScrollView 
   
    horizontal={true}
    style={styles.contentContainer}
    >
      <Image
        resizeMode="contain"
        style={
          [
            styles.image, 
            { width: screenWidth }
        ]}
        source={require('../assets/FSD.png')}
      />
      <View 
        style={styles.header, { width: screenWidth }}
      >
        <Text
        
          style={styles.welcome}
        >
          FullStack-ing Development
        </Text>

        <Image
        resizeMode="contain"
        style={styles.randomBlock1}
        source={require('../assets/RandomB2.png')}
      />

        <Text 
          style={styles.welcomep}
        >
          The FSD team is working on multiple Full-Stack 
          applications. 
          Keep Scrolling right to view each app. 
        </Text>
      </View>

      <View 
        style={styles.header,{ width: screenWidth }}
      >
        <View style={styles.nestedViewStyle}>
            <Text>{'     '}</Text>
        </View>
        <Button
          style={styles.btn}
          title="Facere App"
          color= '#150D23'
          onPress={() => navigation.navigate('Details')}
          onClick={() =>navigation.navigate('Details')}
        />
        <View style={styles.nestedViewStyle}>
            <Text>{'     '}</Text>
        </View>
     </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
   
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight:5,
    paddingLeft:5,
  },
  btn:{
    color: '#FFFDA1',
    backgroundColor: '#181818',
   
    width: '20px',
    height: '20px',
    paddingTop:'60%',
    padding: '10px',
  },
  image:{
    width: 'auto',
    height: 'auto',
    padding: 5,
  },
  randomBlock1: {
    width: '100%',
    height: '50%',
   
  },
  contentContainer: {
    padding: 5,
    backgroundColor: '#D31E1E',
  },
  welcome: {
    flex: 1,
    color: '#150D23',   
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '900',
    paddingTop: '10%',
  },
  welcomep: {
    flex: 1,
    color: '#150D23',
    textAlign: 'center',
  },
  nestedViewStyle: {
    marginVertical: 5
  }
});