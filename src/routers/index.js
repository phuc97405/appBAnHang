import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/login';
const Stack = createStackNavigator();
export default class MainRouter extends Component {
  render() {
    var userToken = true;
    return (
      <Stack.Navigator>
        {userToken ? (
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
