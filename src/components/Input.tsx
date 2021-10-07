import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type InputProps = {
  value: string
  onChange: (text: string) => void
  placeholder: string,
  editable?: boolean,
  icon?: JSX.Element
}

export default function Input({ value, onChange, placeholder, editable, icon }: InputProps) {
  return (
    <View>
      {icon && <View style={styles.container}>
        {icon}
      </View>}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, icon && styles.withIcon]}
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
    paddingVertical: 15,
    marginHorizontal: 15,
    color: '#000'
  },
  withIcon: {
    paddingLeft: 35
  }
});
