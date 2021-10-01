import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export type ButtonProps = {
    title: string;
    btnColor?: string;
    onPress?: () => void;
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
    marginLeft: 15,
    marginRight: 15,
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


export default function Button(props: ButtonProps) {
  const { title, btnColor, onPress } = props;
  const light = btnColor === 'light';
  const color = light ? styles.text : styles.textLight
  return <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, light && styles.buttonLight]}>
        <Text style={color}>{title}</Text>
    </TouchableOpacity>
  </View>;
}
