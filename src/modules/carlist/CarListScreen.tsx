import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function CarListScreen() {
  return (
    <View style={styles.container}>
      <Text>
        CarListScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});