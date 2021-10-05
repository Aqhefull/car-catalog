import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/modules/login/Login';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}