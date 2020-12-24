import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import * as fontSize from './styles/fontSize';
import iconLogo from '../assets/icons/bigcoin.jpg';
const userIcon = (
  <Icon name="person-outline" size={fontSize.bigger} color="#babcbd" />
);
const lockIcon = (
  <Icon name="lock-closed-outline" size={fontSize.bigger} color="#babcbd" />
);
export default class Login extends Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    const {email, passwword} = this.state;
    // auth()
    //   .sigInWithEmailAndPassword(email, passwword)
    //   .then(() => this.props.navigation.navigate('Home'))
    //   .catch((e) => this.setState({errorMessage: e.message}));
    console.log('handle Login');
  };

  render() {
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
                  placeholder="Emal"
                  placeholderTextColor="#babcbd"
                  style={styles.hintext}
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
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
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                />
              </View>
            </View>
          </View>
          {this.state.errorMessage && <Text style={{color: 'red'}} />}
          {this.state.errorMessage}
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.buttonLogin}>
            <Text style={styles.textButton}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: 'white'}}>
              Don't have an account? Sign Up"
            </Text>
            {/* onPress={() => this.props.navigation.navigate('SignUp')} */}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
