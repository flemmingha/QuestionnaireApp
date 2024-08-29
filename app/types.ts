// app/types.ts
import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;