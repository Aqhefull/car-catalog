import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, editable, icon, inputRef, rule, style }) => {
  const styles = useThemeStyleSheet(_styles);
  const [isError, setIsError] = useState(false);

  const _onChangeText = (value: string) => {
    onChangeText && onChangeText(value);
    setIsError(!rule.test(value));
  };

  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.iconWrap}>
          {icon}
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        style={[
          styles.textInput, 
          icon && styles.withIcon,
          isError && styles.errorStyle,
          style
        ]}
        onChangeText={_onChangeText}
        value={value}
        ref={inputRef}
        editable={editable}
      />
    </View>
  );
};

const _styles = (theme: any) => StyleSheet.create({
  container: {
    width: '90%'
  },
  errorStyle: {
    borderColor: theme.colors.ERROR,
  },
  iconWrap: {
    position: 'absolute', 
    top: 10, 
    left: 15
  },
  textInput: {
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