import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Adjust the import paths to point to the correct location
import HomeScreen from './(tabs)/index';
import DetailsScreen from './(tabs)/details';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
