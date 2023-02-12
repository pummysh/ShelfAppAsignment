import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '../screens/Contact';
import Contact from '../screens/Contact/Contact';
import { Group } from '../screens/Contact/group';

const ContactStack = createNativeStackNavigator();

export const ContactStackNavigator = () => {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name={"ContactDetails"}
        component={ContactScreen}
        options={{headerShown: false}}
      />
      <ContactStack.Screen
        name={"Contact"}
        component={Contact}
        options={{headerShown: false}}
      />
      <ContactStack.Screen
        name={"Group"}
        component={Group}
        options={{headerShown: false}}
      />
    </ContactStack.Navigator>
  );
};
