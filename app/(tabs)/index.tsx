import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter for navigation
import styles from '../styles/styles';  // Import styles from styles.ts

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Create router for navigation

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Example of simple validation
    if (username === 'admin' && password === 'password') {
      // Navigate to details screen after successful login
      router.push('/details?itemId=42');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Brugernavn"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Kodeord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log ind</Text>
      </TouchableOpacity>
    </View>
  );
}
