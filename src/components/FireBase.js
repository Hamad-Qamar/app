import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7PTwWD8y6S2_Itxm9Q4bJ8-VnnQgLRvw",
  authDomain: "finals-4bbcb.firebaseapp.com",
  projectId: "finals-4bbcb",
  storageBucket: "finals-4bbcb.firebasestorage.app",
  messagingSenderId: "741476506745",
  appId: "1:741476506745:web:1965519449f9e4772dc8a8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) 
});

export { app, db, auth };
