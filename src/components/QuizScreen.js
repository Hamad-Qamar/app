import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const questions = [
  { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
  { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Madrid'], answer: 'Paris' },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed! Your score: ${score + 1}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  question: { fontSize: 20, marginBottom: 20 },
});
