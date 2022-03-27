import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2f5R_efUkdP5W1pgas4QM0aqvIWJs1s",
  authDomain: "facere-174c8.firebaseapp.com",
  projectId: "facere-174c8",
  storageBucket: "facere-174c8.appspot.com",
  messagingSenderId: "689188800851",
  appId: "1:689188800851:web:95ed5b57569b393f98f9a6",
  measurementId: "G-JR0V8F6T3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Header />
      <Body />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    paddingTop: 10,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#393E41',
  }
})
