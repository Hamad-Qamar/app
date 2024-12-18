import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
    const [expanded, setExpanded] = useState(false);
    const { height: screenHeight } = Dimensions.get('window');
    const headerHeight = screenHeight * 0.2;

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={[styles.headerWrapper, { height: headerHeight }]}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menuIconWrapper}>
                        <Ionicons name="menu" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Education Dashboard</Text>
                </View>
            </View>

            {/* Key Metrics */}
            <View style={[styles.section, { marginTop: headerHeight }]}>
                <Text style={styles.sectionTitle}>Key Metrics</Text>
                <View style={styles.metricsContainer}>
                    <View style={styles.metricCard}>
                        <Text style={styles.metricValue}>95%</Text>
                        <Text style={styles.metricLabel}>Prediction Accuracy</Text>
                    </View>
                    <View style={styles.metricCard}>
                        <Text style={styles.metricValue}>1.2M</Text>
                        <Text style={styles.metricLabel}>Games Analyzed</Text>
                    </View>
                </View>
            </View>

            {/* Courses Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Courses</Text>
                <TouchableOpacity
                    style={styles.courseCard}
                    onPress={() => navigation.navigate('Courses')}>
                    <Text style={styles.courseTitle}>Programming Fundamentals</Text>
                    <Text style={styles.courseDetails}>Start Learning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.courseCard}
                    onPress={() => navigation.navigate('Courses')}>
                    <Text style={styles.courseTitle}>Mathematics for Data Science</Text>
                    <Text style={styles.courseDetails}>Start Learning</Text>
                </TouchableOpacity>
            </View>

            {/* Quizzes and Gamification */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quiz & Gamification</Text>
                <TouchableOpacity
                    style={styles.quizCard}
                    onPress={() => navigation.navigate('Quiz')}>
                    <Text style={styles.quizTitle}>Take a Quiz</Text>
                    <Text style={styles.quizDetails}>Test your knowledge</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.quizCard}
                    onPress={() => navigation.navigate('Progress')}>
                    <Text style={styles.quizTitle}>View Progress</Text>
                    <Text style={styles.quizDetails}>Track your learning milestones</Text>
                </TouchableOpacity>
            </View>

            {/* Progress Tracking Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Progress Tracking</Text>
                <View style={styles.recentPredictions}>
                    <View style={styles.predictionItem}>
                        <Text style={styles.predictionText}>Completed: Programming Basics</Text>
                        <Text style={styles.predictionValue}>80% progress</Text>
                    </View>
                    <View style={styles.predictionItem}>
                        <Text style={styles.predictionText}>In Progress: Math for Data Science</Text>
                        <Text style={styles.predictionValue}>50% progress</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerWrapper: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    header: {
        paddingVertical: 45,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 6,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    menuIconWrapper: {
        position: 'absolute',
        left: 15,
        top: 80,
        zIndex: 2,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    section: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    metricsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metricCard: {
        alignItems: 'center',
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#e8f5e9',
        borderRadius: 8,
    },
    metricValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#388E3C',
    },
    metricLabel: {
        fontSize: 14,
        color: '#555',
    },
    courseCard: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f9fbe7',
        borderRadius: 8,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33691E',
    },
    courseDetails: {
        fontSize: 14,
        color: '#78909C',
    },
    quizCard: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f9fbe7',
        borderRadius: 8,
    },
    quizTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33691E',
    },
    quizDetails: {
        fontSize: 14,
        color: '#78909C',
    },
    recentPredictions: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    predictionItem: {
        fontSize: 16,
        marginBottom: 12,
        color: '#424242',
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#e8f5e9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    predictionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    predictionValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#388E3C',
    },
});

export default Home;
