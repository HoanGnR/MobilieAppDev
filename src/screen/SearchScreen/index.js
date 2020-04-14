import * as React from 'react';
import BasePage from '../../base/BasePage';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class SearchScreen extends BasePage{  
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

  renderHomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

  renderSettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
	  </View>
		      );
  }
	  
  
  render(){
	  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={renderHomeScreen} />
        <Tab.Screen name="Settings" component={renderSettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}
