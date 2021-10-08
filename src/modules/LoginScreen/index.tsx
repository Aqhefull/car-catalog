import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, View, Text, Animated, KeyboardAvoidingView} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { routes } from '../../constants';

import { Button, SvgContainer, Input } from '../../components';

import Logo from '../../../assets/images/Logo.svg';
import useTheme from '../../hooks/useTheme';
import useThemeStyleSheet from '../../hooks/useThemeStylesheet';

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useThemeStyleSheet(_styles);
  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [loginVisible, setLoginVisible] = useState(false);
  const [password, setPassword] = useState('');

  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const logoScale = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1]
  });

  const formOpacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });

  useEffect(() => {
    Animated.timing(scale, {
      toValue: loginVisible ? 0.6 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(opacity, {
      toValue: loginVisible ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [loginVisible]);

  const signInHandler = () => {
    if(loginVisible) {
      navigation.dispatch(StackActions.replace(routes.tabs));
    }
    setLoginVisible(!loginVisible);
  };

  return (
    <View style={styles.login}>
      <Animated.View style={{ transform: [{scale: logoScale }]}}>
        <SvgContainer logo={Logo}/>
      </Animated.View>
      <KeyboardAvoidingView>
        <Animated.View style={[styles.loginForm, { opacity: formOpacity}]}>
          <Input
            value={login}
            placeholder="Username"
            onChange={(value: string) => setLogin(value)}
            editable={loginVisible}
            icon={<Entypo name="user" size={25} color={theme.colors.ICON} />}
          />
          <Input
            value={password}
            placeholder="Password"
            onChange={(value: string) => setPassword(value)}
            editable={loginVisible}
            icon={<Entypo name="lock" size={25} color={theme.colors.ICON} />}
          />
        </Animated.View>
      </KeyboardAvoidingView>
      <View style={styles.controls}>
        <Button title={loginVisible ? 'Login' : 'Sign In'} onPress={signInHandler}/>
        <Button title="Register" appearance="light"/>
        <Text style={styles.forgetLink}>Did you forget your password?</Text>
      </View>
    </View>
  );
};

const _styles = (theme: any) => {
  return StyleSheet.create({
    login: {
      backgroundColor: theme.colors.BACKGROUND,
      flex: 1,
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-around'
    },
    forgetLink: {
      textAlign: 'center',
      paddingTop: 20
    },
    controls: {
      marginBottom: 20
    },
    loginForm: {
      display: 'flex',
      opacity: 0,
      alignItems: 'stretch',
      justifyContent: 'center'
    },
  });
};

export default LoginScreen;