import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

export default function ProgressTracking() {
  const data = [
    { x: 'Completed', y: 75 },
    { x: 'Remaining', y: 25 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <VictoryPie data={data} colorScale={['#4caf50', '#f44336']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
