import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const main = require('./src/main.js');
const styles = require('./src/style.js').styles;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <main.Summary/>
    </View>
  );
}