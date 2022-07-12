import * as React from 'react';

//EXPO DEP 
import { StatusBar } from 'expo-status-bar';

//NATIVE DEP 
import { View,Text,Platform, ScrollView, StyleSheet } from 'react-native';

//LOCAL DEP 
import Navbar from '../components/HomePage/Navbar';
import Body from '../components/HomePage/BodySection';
import Footer from '../components/HomePage/FooterSection';

//let screenWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={[styles.navView]}>
        <Navbar></Navbar>
      </View>
      <View style={[styles.bodyView]} >
        <Body></Body>
      </View>
      <View style={[styles.bottomView]}>
        <Footer></Footer>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        
      },
      default: {
        position: 'relative',
        display: 'flex',
        padding: '100px 20vw'
       
      }
    })
  },
  navView: {
    ...Platform.select({
      android: {
        flex: 2,
      },
      default: {
        flex: .4, 
        backgroundColor: "white"
      }
    })
  },

  bodyView: {
    ...Platform.select({
      android: {
        flex: 2,
      },
      default: {
        flex: 2, 
        backgroundColor: "darkorange"
      }
    })
  },

  bottomView: {
    ...Platform.select({
      android: {
        flex: 2,
      },
      default: {
        flex: 2, 
        backgroundColor: "#04030F" 
      }
    })
  }
});

