import React, { useState} from 'react';
import { StyleSheet, Image, Button, View, Text, Dimensions, ImageBackground } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MappingScreen = ( { route, navigation } ) => {

  //const route = useRoute(); // Get the route object from useRoute hook
  //const { item } = route.beacon; // Extract the beacon object from route.params


  const markerPosition = {
    top: 400, // Update this with the actual position values of the beacon
    left: 275, // Update this with the actual position values of the beacon
  };

  const radiusPosition = {
    top: 377.5, // Update this with the actual position values of the beacon
    left: 252.5, // Update this with the actual position values of the beacon
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/building-map.jpg')}
        style={styles.map}
        resizeMode="contain"
      />
      <View
        style={[
          styles.marker,
          {
            top: markerPosition.top, // Set the top position of the marker based on beacon data
            left: markerPosition.left, // Set the left position of the marker based on beacon data
          },
        ]}
      >
        <Text style={styles.markerText}>B</Text>
      </View>
      <View
        style={[
          styles.radius,
          {
            top: radiusPosition.top, // Set the top position of the marker based on beacon data
            left: radiusPosition.left, // Set the left position of the marker based on beacon data
          },
        ]}
      >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    transform: [{ scale: 0.75 }], // adjust the scale value to zoom in or out
    zIndex: 1, // Set a lower zIndex for the map image to make sure it's displayed underneath the marker
  },
  marker: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 0,
    height: 0,
    borderRadius: 0,
    backgroundColor: 'red',
    zIndex: 3, // Set a higher zIndex for the marker to make sure it's displayed on top of the map image
  },
  radius: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 0,
    height: 0,
    borderRadius: 60,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    zIndex: 2, // Set a lower zIndex than the marker to make sure it's displayed on underneath the beacon marker
  },
  markerText: {
    alignItems: 'center',
    color: 'white',
    fontSize: 12,
  },
});

export default MappingScreen;