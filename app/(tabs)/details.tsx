import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';  // Import the styles from your styles.ts

export default function QuestionnaireScreen() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});

  const handleSelectAnswer = (question: string, answer: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Answers:', selectedAnswers);
    alert('Tak for din besvarelse!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Spørgeskema om Mental Sundhed</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>1. Hvordan har du det i dag?</Text>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q1'] === 'Godt' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q1', 'Godt')}
        >
          <Text>Godt</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q1'] === 'Neutral' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q1', 'Neutral')}
        >
          <Text>Neutral</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q1'] === 'Dårligt' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q1', 'Dårligt')}
        >
          <Text>Dårligt</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>2. Hvor ofte føler du dig stresset?</Text>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q2'] === 'Ofte' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q2', 'Ofte')}
        >
          <Text>Ofte</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q2'] === 'Nogle gange' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q2', 'Nogle gange')}
        >
          <Text>Nogle gange</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q2'] === 'Sjældent' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q2', 'Sjældent')}
        >
          <Text>Sjældent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>3. Sover du godt om natten?</Text>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q3'] === 'Ja' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q3', 'Ja')}
        >
          <Text>Ja</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.answer, selectedAnswers['q3'] === 'Nej' && styles.selectedAnswer]} 
          onPress={() => handleSelectAnswer('q3', 'Nej')}
        >
          <Text>Nej</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Indsend</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
