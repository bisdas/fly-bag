import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuIcon from './../components/shared/MenuIcon';

import OrdersScreen from './../screens/OrdersScreen';

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

const OrdersStackScreen = ({ navigation }) => {
  return (
    <Navigator initialRouteName="Orders" screenOptions={screenOptions}>
      <Screen name="Orders" component={OrdersScreen} options={() => setBasketScreenHeaderOptions(navigation)} />
    </Navigator>
  );
};

export default OrdersStackScreen;
