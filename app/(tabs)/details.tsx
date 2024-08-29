import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const { itemId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
