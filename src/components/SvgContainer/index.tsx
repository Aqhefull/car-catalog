import React from 'react';
import { View, StyleSheet, Platform, Image } from 'react-native';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const SvgContainer: React.FC<LogoProps> = ({logo: Logo, style = {}}) => {
  const styles = useThemeStyleSheet(_styles);
  return <View style={styles.container}>
    {
      Platform.OS === 'web' ? 
        <Image style={[styles.logo, style]} source={{uri: Logo}} /> : 
        <View style={[styles.logo, style]}><Logo/></View>
    }
  </View>;
};

const _styles = (theme: any) => StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 300,
    height: 300
  },
  container: {
    backgroundColor: theme.colors.ACCENT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

export default SvgContainer;