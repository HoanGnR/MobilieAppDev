/**
 * First React Native App
 * author hoannd13
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 50}}>Hello, world!</Text>
      </View>
    );
  }
}
