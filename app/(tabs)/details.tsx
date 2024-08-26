import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout'; // Import the type from _layout

type Props = StackScreenProps<RootStackParamList, 'details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { itemId } = route.params; // Extract itemId from route params

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
