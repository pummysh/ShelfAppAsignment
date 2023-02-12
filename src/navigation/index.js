import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text, Image } from 'react-native';
import Home from '../screens/Home';
import ContactsList from '../screens/Contact';
import { ImagePath } from '../assets/Images/ImagePath';
import { ContactStackNavigator } from './contactStack';


const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <TouchableOpacity >
                <Text>
                  Home
                </Text>
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name="ContactStack"
          component={ContactStackNavigator}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <TouchableOpacity>
                <Text>
                  Contact
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
