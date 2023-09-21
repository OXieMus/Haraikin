// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bqkKo3zI56IIs4CXgic-Exu4MfDfNkg",
  authDomain: "haraikinsut.firebaseapp.com",
  projectId: "haraikinsut",
  storageBucket: "haraikinsut.appspot.com",
  messagingSenderId: "1047487852935",
  appId: "1:1047487852935:web:d380105bc64f98be47a322",
  measurementId: "G-LR2S8SYYES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});