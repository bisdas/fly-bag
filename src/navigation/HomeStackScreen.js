import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from './../components/shared/Logo';
import MenuIcon from './../components/shared/MenuIcon';
import NotificationIcon from './../components/shared/NotificationIcon';
import CartIcon from './../components/shared/CartIcon';
import HomeScreen from './../screens/HomeScreen';
import CategoriesScreen from './../screens/CategoriesScreen';
import ProductListScreen from './../screens/ProductListScreen';

const { Navigator, Screen } = createStackNavigator();

const allScreenOptions = {
  headerStyle: {
    backgroundColor: '#0079BD'
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const setHomeScreenHeaderOptions = (navigation) => {
  return {
    headerTitle: () => <Logo />,
    headerLeft: () => <MenuIcon onPress={navigation.openDrawer} />,
    headerRight: () => (
      <View style={styles.headerRigthContainer}>
        <View style={styles.notificationIconContainer}>
          <NotificationIcon onPress={() => { }} />
        </View>
        <View style={styles.cartIconContainer}>
          <CartIcon style={styles.icon} onPress={() => { }} />
        </View>
      </View>
    )
  }
}

const HomeStackScreen = ({ navigation }) => {
  return (
    <Navigator initialRouteName="Home" screenOptions={allScreenOptions}>
      <Screen name="Home" component={HomeScreen} options={() => setHomeScreenHeaderOptions(navigation)} />
      <Screen name="Categories" component={CategoriesScreen} />
      <Screen name="Product List" component={ProductListScreen} />
    </Navigator>
  );
};


const styles = StyleSheet.create({
  headerRigthContainer: {
    flexDirection: 'row'
  },
  notificationIconContainer: {
  },
  cartIconContainer: {
    marginLeft: 2
  }
})

export default HomeStackScreen;
