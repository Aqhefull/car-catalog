import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, editable, icon }) => {
  const styles = useThemeStyleSheet(_styles);
  return (
    <View>
      {icon && (
        <View style={styles.container}>
          {icon}
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, icon && styles.withIcon]}
        onChangeText={text => onChange(text)}
        value={value}
        editable={editable}
      />
    </View>
  );
};

const _styles = (theme: any) => StyleSheet.create({
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
    borderColor: theme.colors.ADDITIONAL,
    paddingVertical: 15,
    marginHorizontal: 15,
    color: theme.colors.PRIMARY
  },
  withIcon: {
    paddingLeft: 35
  }
});

export default Input;