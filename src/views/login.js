import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

import * as fontSize from './styles/fontSize';
import iconLogo from '../assets/icons/bigcoin.jpg';
import styles from './styles/styles';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import {getCurrentWeather} from '../api/weatherApi';

const userIcon = (
  <Icon name="person-outline" size={fontSize.bigger} color="#babcbd" />
);
const lockIcon = (
  <Icon name="lock-closed-outline" size={fontSize.bigger} color="#babcbd" />
);
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErMessage] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocation = async () => {
    Geolocation.getCurrentPosition((info) => {
      console.log(info);
      setLongitude(info.coords.longitude);
      setLatitude(info.coords.latitude);
    });
    await getCurrentWeather(latitude, longitude);
  };

  const handleLogin = async () => {
    try {
      const {email, password} = this.state;
      if ((email, password)) {
        await auth().signInWithEmailAndPassword(email, password);
        await AsyncStorage.setItem('isLogin', 'true');
        console.log('Login success');
      } else {
        throw Error('Empty Input');
      }
    } catch (error) {
      console.log(error, 'Error on login');
    }
  };

  return (
    <View style={styles.containerRoot}>
      <LinearGradient
        colors={['#1a2a44', '#3D4D67']}
        style={styles.linearGradient}>
        <View style={styles.viewLogo}>
          <Image source={iconLogo} style={styles.iconLogo} />
        </View>
        <View style={styles.containetTextInput}>
          <View style={styles.viewRowIcon}>
            <View style={styles.viewIconInput}>{userIcon}</View>
            <View style={{flex: 8}}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#babcbd"
                style={styles.hintext}
                onChangeText={(value) => setEmail(value)}
                value={email}
              />
            </View>
          </View>
        </View>

        <View style={styles.containetTextInput}>
          <View style={styles.viewRowIcon}>
            <View style={styles.viewIconInput}>{lockIcon}</View>
            <View style={{flex: 8}}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#babcbd"
                style={styles.hintext}
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                value={password}
              />
            </View>
          </View>
        </View>
        {/* {errorMessage && <Text style={{color: 'red'}}> {errorMessage}</Text>} */}
        {/* {errorMessage} */}
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButton}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Don't have an account? Sign Up"</Text>
          {/* onPress={() => this.props.navigation.navigate('SignUp')} */}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
