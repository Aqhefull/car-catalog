import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

type ButtonProps = {
    title: string;
    appearance?: string;
    onPress?: () => void;
}

export default function Button({ title, appearance = 'primary', onPress }: ButtonProps) {
  const lightStyle = appearance === 'light';
  return <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, lightStyle && styles.buttonLight]}>
      <Text style={lightStyle ? styles.text : styles.textLight}>{title}</Text>
    </TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#000',
    marginTop: 20,
    marginHorizontal: 15
  },
  buttonLight: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000'
  },
  text: {
    color: '#000',
    fontSize: 16
  },
  textLight: {
    color: '#fff',
    fontSize: 16
  }
});