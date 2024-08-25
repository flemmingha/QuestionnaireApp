// types.ts

import { ParamListBase } from '@react-navigation/native';

// Define your screens and their parameters
export type RootStackParamList = {
  Home: undefined; // No parameters for Home screen
  Details: { itemId: number }; // Details screen expects an itemId parameter
};

// Define the navigation prop type
export type RootStackNavigationProp<T extends keyof RootStackParamList> = {
  navigate: (screen: T, params?: RootStackParamList[T]) => void;
};
