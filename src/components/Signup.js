import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Animated, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './FireBase'; // Adjust the path as per your project structure
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all the details');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: name,
        email: email,
        password: password, // Never store plain passwords in production
      });

      alert('Account created successfully');
      navigation.replace('Login');
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image source={require('../database/images/background.png')} style={styles.backgroundImage} />
      <Image source={require('../database/images/light.png')} style={[styles.cornerImage, styles.topLeft]} />
      <Image source={require('../database/images/light.png')} style={[styles.cornerImage, styles.topRight]} />

      <View style={styles.overlay}>
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Sign Up</Animated.Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#5F6368"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#5F6368"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#5F6368"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#5F6368"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Animated.Text style={[styles.footer, { opacity: fadeAnim }]}>
          Already have an account?{' '}
          <Text style={styles.signupText} onPress={() => navigation.navigate('Login')}>
            Log In
          </Text>
        </Animated.Text>
      </View>
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
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
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

export default Signup;
