import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Home from './src/components/Home';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
