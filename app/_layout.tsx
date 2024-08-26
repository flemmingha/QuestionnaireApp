import React from 'react'; // Ensure React is imported
import { Stack } from 'expo-router';

export type RootStackParamList = {
  index: undefined;         // Home screen does not expect any parameters
  details: { itemId: number }; // Details screen expects an itemId parameter
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} /> {/* Home Screen */}
      <Stack.Screen name="details" options={{ title: 'Details' }} /> {/* Details Screen */}
    </Stack>
  );
}
