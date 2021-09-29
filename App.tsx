import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Content from './src/components/Content';
import Header from './src/components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content/>
    </View>

  );
}