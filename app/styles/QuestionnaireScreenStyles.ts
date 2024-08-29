// app/styles/QuestionnaireScreenStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#4b8e69',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
  },
});
