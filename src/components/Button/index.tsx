import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const Button: React.FC<ButtonProps> = ({ title, appearance = 'primary', onPress }) => {
  const styles = useThemeStyleSheet(_styles);
  const lightStyle = appearance === 'light';
  return <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, lightStyle && styles.buttonLight]}>
      <Text style={lightStyle ? styles.text : styles.textLight}>{title}</Text>
    </TouchableOpacity>
  </View>;
};

const _styles = (theme: any) => StyleSheet.create({
  button: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.PRIMARY,
    borderWidth: 2,
    borderColor: theme.colors.PRIMARY,
    marginTop: 20,
    marginHorizontal: 15
  },
  buttonLight: {
    backgroundColor: theme.colors.ACCENT,
    borderWidth: 2,
    borderColor: theme.colors.PRIMARY
  },
  text: {
    color: theme.colors.PRIMARY,
    fontSize: 16
  },
  textLight: {
    color: theme.colors.ACCENT,
    fontSize: 16
  }
});

export default Button;