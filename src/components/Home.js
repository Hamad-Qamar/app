import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

const Home = () => {
    const [expanded, setExpanded] = useState(false); // State to toggle additional games
    const { height: screenHeight } = Dimensions.get('window');
    const headerHeight = screenHeight * 0.2; // Increase header height to 20% of the screen height

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <ScrollView style={styles.container}>
            <View style={[styles.headerWrapper, { height: headerHeight }]}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menuIconWrapper}>
                        <Ionicons name="menu" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Game Sale Prediction Dashboard</Text>
                </View>
            </View>

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

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sales Predictions</Text>
                {/* <View style={styles.graphPlaceholder}>
                    <Image 
                        source={require('../database/images/graph.png')} // Path to the image
                        style={styles.graphImage} 
                    />
                </View> */}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Predicted Games</Text>
                <View style={styles.gameList}>
                    <TouchableOpacity style={styles.gameCard}>
                        <Text style={styles.gameTitle}>Game A</Text>
                        <Text style={styles.gameDetails}>Projected Sales: 500K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gameCard}>
                        <Text style={styles.gameTitle}>Game B</Text>
                        <Text style={styles.gameDetails}>Projected Sales: 350K</Text>
                    </TouchableOpacity>
                    {expanded && (
                        <>
                            <TouchableOpacity style={styles.gameCard}>
                                <Text style={styles.gameTitle}>Game C</Text>
                                <Text style={styles.gameDetails}>Projected Sales: 300K</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gameCard}>
                                <Text style={styles.gameTitle}>Game D</Text>
                                <Text style={styles.gameDetails}>Projected Sales: 250K</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gameCard}>
                                <Text style={styles.gameTitle}>Game E</Text>
                                <Text style={styles.gameDetails}>Projected Sales: 220K</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
                <TouchableOpacity style={styles.loadMoreButton} onPress={toggleExpand}>
                    <Text style={styles.loadMoreText}>{expanded ? 'Show Less' : 'Load More'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Predictions</Text>
                <View style={styles.recentPredictions}>
                    <View style={styles.predictionItem}>
                        <Text style={styles.predictionText}>Game X</Text>
                        <Text style={styles.predictionValue}>80K sales</Text>
                    </View>
                    <View style={styles.predictionItem}>
                        <Text style={styles.predictionText}>Game Y</Text>
                        <Text style={styles.predictionValue}>120K sales</Text>
                    </View>
                    <View style={styles.predictionItem}>
                        <Text style={styles.predictionText}>Game Z</Text>
                        <Text style={styles.predictionValue}>200K sales</Text>
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
        paddingVertical: 45,  // Increased padding for more height
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 6,
        flexDirection: 'row', // Aligning the icon and text horizontally
        paddingHorizontal: 15, // Added padding for better spacing
    },
    menuIconWrapper: {
        position: 'absolute',
        left: 15,
        top: 80,  // Adjust top position to align with header
        zIndex: 2,  // Ensure the menu icon is on top
    },
    headerText: {
        fontSize: 24,  // Increased font size for better visibility
        fontWeight: 'bold',
        color: '#fff',
    },
    section: {
        top: '-40',
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
    gameList: {
        marginTop: 10,
    },
    gameCard: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f9fbe7',
        borderRadius: 8,
    },
    gameTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33691E',
    },
    gameDetails: {
        fontSize: 14,
        color: '#78909C',
    },
    recentPredictions: {
        marginTop: 20,  // Adjusted for spacing
        padding: 15,  // Added padding for better layout
        backgroundColor: '#ffffff',  // White background for a clean look
        borderRadius: 12,  // Rounded corners for a modern look
        borderWidth: 1,  // Subtle border for separation
        borderColor: '#E0E0E0',  // Soft border color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    predictionItem: {
        fontSize: 16,  // Increased font size for clarity
        marginBottom: 12,  // Added spacing between items
        color: '#424242',  // Dark gray for better readability
        paddingVertical: 12,  // Padding inside the item for spacing
        paddingHorizontal: 15,  // Horizontal padding for better alignment
        backgroundColor: '#e8f5e9',  // Light background for each item
        borderRadius: 8,  // Rounded corners for each item
        borderWidth: 1,  // Light border for visual separation
        borderColor: '#E0E0E0',  // Soft border color
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',  // Horizontal layout for title and value
        alignItems: 'center',  // Centering content vertically
    },
    predictionText: {
        flex: 1,  // Ensuring the title takes up available space
        fontSize: 16,  // Consistent font size for readability
        color: '#333',  // Dark gray for better contrast
    },
    predictionValue: {
        fontSize: 16,  // Same size as the prediction text
        fontWeight: 'bold',  // Bold to highlight the value
        color: '#388E3C',  // Green color to signify positive projections
    },
    graphPlaceholder: {
        height: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    graphImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', // Ensures the image fits well in the container
    },
    loadMoreButton: {
        marginTop: 15,
        paddingVertical: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        alignItems: 'center',
    },
    loadMoreText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Home;
