import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
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

export type InputProps = {
  value: string
  onChange: any
  placeholder: string,
  editable?: boolean,
  children?: any
}

export default function Input(props: InputProps) {
  const { value, onChange, placeholder, editable, children: Icon } = props;
  return (
    <View>
      <View style={{position: 'absolute', top: 10, left: 15}}>
        {Icon && Icon}
      </View>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, Icon && styles.withIcon]}
        onChangeText={text => onChange(text)}
        value={value}
        editable={editable}
      />
    </View>
  );
}

