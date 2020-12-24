import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
export default class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    this.getRoleStorage();
  }

  async getRoleStorage() {
    try {
      const checkLogin = await AsyncStorage.getItem('isLogin');
      if (checkLogin) {
        this.setState({
          isLogin: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Stack.Navigator>
        {this.state.isLogin ? (
          <Stack.Screen
            name="Home"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    );
  }
}
