// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAtX6Se23ka4fADhAsJueab54WkjF-qqQM",
  authDomain: "mytodo-3bc39.firebaseapp.com",
  projectId: "mytodo-3bc39",
  storageBucket: "mytodo-3bc39.firebasestorage.app",
  messagingSenderId: "1045484189257",
  appId: "1:1045484189257:web:77faac95fc63361d8e3198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const firestore = getFirestore(app);


export default app;
export { auth, firestore };