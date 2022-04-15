// FIREBASE DEP
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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
const auth = firebase.auth();
const firestore = firebase.firestore();

export const fireDB = app.firestore();
export default app;