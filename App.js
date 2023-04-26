import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import MappingScreen from './Screen/MappingScreen';
import SettingsScreen from './Screen/SettingsScreen';
import BeaconScreen from './Screen/BeaconScreen';
const Tab = createBottomTabNavigator();

const TabNavigation = ( { navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Mapping" 
          component={MappingScreen} 
          options={{
            tabBarLabel: 'Mapping',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Beacons" 
          component={BeaconScreen} 
          options={{
            tabBarLabel: 'Beacons',
            tabBarIcon: ({ color, size }) => (
              <Icon name="bluetooth" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;