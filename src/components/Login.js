import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { db } from './FireBase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(0.8))[0];

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    try {
      const userQuery = query(
        collection(db, 'users'),
        where('email', '==', username)
      );

      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        Alert.alert('Error', 'User not found');
        return;
      }

      const userData = querySnapshot.docs[0].data();

      if (userData.password === password) {
        navigation.replace('Home');
      } else {
        Alert.alert('Error', 'Incorrect password');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Top Left Image */}
      <Image
        source={require('../database/images/light.png')}
        style={[styles.cornerImage, styles.topLeft]}
      />

      {/* Top Right Image */}
      <Image
        source={require('../database/images/light.png')}
        style={[styles.cornerImage, styles.topRight]}
      />

      <Image
        source={require('../database/images/background.png')}
        style={styles.backgroundImage}
      />
      <Animated.View
        style={[
          styles.overlay,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate('Signup')}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0B0B0', // Slightly darker grey background
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: -100,
    backgroundColor: '',
  },
  cornerImage: {
    position: 'absolute',
    width: 120, // Adjust size for better visibility
    height: 120, // Adjust size for better visibility
    resizeMode: 'contain', // Ensure image fits properly
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  overlay: {
    width: '85%',
    padding: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF', // Clean white card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333', // Darker text for contrast
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666', // Subtle subtitle
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC', // Light gray border
    backgroundColor: '#FAFAFA', // Slightly off-white for depth
    color: '#333333', // Input text color
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFA500', // Vibrant orange accent
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // White text for button
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666666', // Subtle footer text
    fontSize: 14,
  },
  signupText: {
    color: '#FFA500', // Accent orange for links
    fontWeight: 'bold',
  },
});

export default Login;
