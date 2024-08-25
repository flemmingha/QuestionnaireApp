import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { withExpoRoot } from 'expo-router';

import HomeScreen from './index';
import DetailsScreen from './details';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// withExpoRoot is used to wrap the root component of an Expo Router app
export default withExpoRoot(Layout);