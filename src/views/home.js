import React from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';
export default class Home extends React.Component {
  // state = {currentUser: null};
  render() {
    // const {currentUser} = this.state;
    return (
      <View>
        {/* <Text>Hi {currentUser && currentUser.email}!</Text> */}
        <Text>Hi home!</Text>
      </View>
    );
  }
}
