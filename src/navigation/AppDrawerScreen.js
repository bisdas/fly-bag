import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackScreen from './../navigation/HomeStackScreen';
import AuthStackScreen from './../navigation/AuthStackScreen';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="SignIn" component={AuthStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawerScreen;
