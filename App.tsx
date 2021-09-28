import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

import car from './assets/images/car.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  indicator: {
    paddingBottom: 15
  },
  loadingText: {
    paddingTop: 5,
    fontSize: 16
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from Car Catalog app!</Text>
      <Image
        style={styles.logo}
        source={car}
      />
      <View style={styles.indicator}>
        <ActivityIndicator size="large"/>
        <Text style={styles.loadingText}>Loading..</Text>
      </View>
    </View>
  );
}