import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const courses = [
  { id: '1', title: 'Programming Fundamentals', description: 'Learn the basics of programming using popular languages.' },
  { id: '2', title: 'Mathematics for Data Science', description: 'Explore mathematical concepts essential for data science.' },
  { id: '3', title: 'Introduction to Machine Learning', description: 'Understand the foundations of machine learning and AI.' },
];

export default function CourseLibrary({ navigation }) {
  const handleCoursePress = (courseId) => {
    // Navigate to course details or start learning
    navigation.navigate('CourseDetails', { courseId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Library</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseItem}
            onPress={() => handleCoursePress(item.id)}
          >
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  courseItem: {
    padding: 15,
    backgroundColor: '#e8f5e9',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#388E3C' },
  courseDescription: { fontSize: 14, color: '#555', marginTop: 5 },
});
