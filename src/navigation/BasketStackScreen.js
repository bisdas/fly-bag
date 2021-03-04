import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuIcon from './../components/shared/MenuIcon'

import BasketScreen from './../screens/BasketScreen';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#0079BD'
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const setBasketScreenHeaderOptions = (navigation) => {
  return {
    headerLeft: () => <MenuIcon onPress={navigation.openDrawer} />
  }
}

const BasketStackScreen = ({ navigation }) => {
  return (
    <Navigator initialRouteName="Basket" screenOptions={screenOptions}>
      <Screen name="Basket" component={BasketScreen} options={() => setBasketScreenHeaderOptions(navigation)} />
    </Navigator>
  );
};

export default BasketStackScreen;
