import React from 'react';
import { View, StyleSheet, Platform, Image, StyleProp, ImageStyle } from 'react-native';

export type LogoProps = {
    logo: keyof JSX.IntrinsicElements,
    style?: StyleProp<ImageStyle>
}

export default function SvgContainer({logo: Logo, style = {}}: LogoProps) {
  return <View style={styles.container}>
    {
      Platform.OS === 'web' ? 
        <Image style={[styles.logo, style]} source={{uri: Logo}} /> : 
        <View style={[styles.logo, style]}><Logo/></View>
    }
  </View>;
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 300,
    height: 300
  },
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});