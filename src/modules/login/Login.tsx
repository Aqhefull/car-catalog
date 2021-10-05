import React, {useState} from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Button from '../../components/Button';
import ImageSmart from '../../components/ImageSmart';
import Input from '../../components/Input';

import Logo from '../../../assets/images/Logo.svg';
import { Entypo } from '@expo/vector-icons';
  
export default function Login() {
  const [login, setLogin] = useState('');
  const [loginVisible, setLoginVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [animatedScalePress, setAnimScalePress] = useState(new Animated.Value(1));
  const [animatedOpacityForm, setAnimOpacityForm] = useState(new Animated.Value(0));
  
  const runAnimations = () => {
    Animated.timing(animatedScalePress, {
      toValue: loginVisible ? 1 : 0.8,
      duration: 500,
      useNativeDriver: false
    }).start(({ finished }) => {
      finished && setAnimScalePress(new Animated.Value(loginVisible ? 1 : 0.8));
    });
    Animated.timing(animatedOpacityForm, {
      toValue: loginVisible ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start(({ finished }) => {
      finished && setAnimOpacityForm(new Animated.Value(loginVisible ? 0 : 1));
    });
  };

  const signInHandler = () => {
    setLoginVisible(!loginVisible);
    runAnimations();
  };

  return (
    <View style={styles.login}>
      <Animated.View style={{ transform: [{scale: animatedScalePress }]}}>
        <ImageSmart logo={Logo}/>
      </Animated.View>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}> 
        <Animated.View style={[styles.loginForm, { opacity: animatedOpacityForm}]}>  
          <Input value={login} placeholder="Username" onChange={(value: string) => setLogin(value)} editable={loginVisible}>
            <Entypo name="user" size={25} color="#000" />
          </Input>
          <Input value={password} placeholder="Password" onChange={(value: string) => setPassword(value)} editable={loginVisible}>
            <Entypo name="lock" size={25} color="#000" />
          </Input>
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.controls}>
        <Button title={loginVisible ? 'Login' : 'Sign In'} onPress={signInHandler}/>
        <Button title="Register" appearance="light"/>
        <Text style={styles.forgetLink}>Did you forget your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#fff',
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