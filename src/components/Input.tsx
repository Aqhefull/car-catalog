import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export type InputProps = {
  value: string
  onChange: (text: string) => void
  placeholder: string,
  editable?: boolean,
  children?: JSX.Element
}

export default function Input({ value, onChange, placeholder, editable, children }: InputProps) {
  return (
    <View>
      {children && <View style={styles.container}>
        {children}
      </View>}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, children && styles.withIcon]}
        onChangeText={text => onChange(text)}
        value={value}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 10, 
    left: 15
  },
  input: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    color: '#000'
  },
  withIcon: {
    paddingLeft: 35
  }
});
