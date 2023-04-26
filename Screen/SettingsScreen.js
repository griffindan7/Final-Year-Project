import React, { useState } from 'react';
import { StyleSheet, Switch, Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [number, onChangeNumber] = React.useState('');
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text style={styles.optionText}>Bluetooth Scan Time</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="7"
        keyboardType="numeric"
      />
        <Text style={styles.optionText}>Audio Accessibility</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e" 
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
        <Text style={styles.optionText}>Map Zoom</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="0.8"
        keyboardType="numeric"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  option: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;