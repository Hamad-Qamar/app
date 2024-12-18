import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';  // Import the auth state listener
import { auth } from './firebase'; // Import Firebase auth from your firebase.js
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import CourseLibrary from './components/CourseLibrary';
import QuizScreen from './components/QuizScreen';
import ProgressTracking from './components/ProgressTracking';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track authentication state

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is logged out
      }
    });

    // Cleanup listener when component unmounts
    return unsubscribe;
  }, []);

  if (isAuthenticated === null) {
    return null; // You can show a loading spinner here while Firebase checks auth state
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        {/* Login and Signup Screens */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        
        {/* Main App Screens (only visible to authenticated users) */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CourseLibrary} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Progress" component={ProgressTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//----