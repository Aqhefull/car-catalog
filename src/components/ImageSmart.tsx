import React from 'react';
import { View, StyleSheet, Platform, Image } from 'react-native';

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

export type LogoProps = {
    logo: any,
    style?: any
}

export default function ImageSmart(props: LogoProps) {
  const {logo: Logo, style} = props;
  return <View style={styles.container}>
    {
      Platform.OS === 'web' ? 
        <Image style={[styles.logo, style && style]} source={{uri: Logo}} /> : 
        <Logo style={{...styles.logo, ...style}} />
    }
  </View>;
}
