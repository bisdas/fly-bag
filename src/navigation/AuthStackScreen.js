import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './../screens/SignInScreen';
import IconBack from '../assets/icons/IconBack.svg';

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

const setSignInScreenHeaderOptions = (navigation) => {
    return {
        title: '',
        headerLeft: () => {
            return (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeftContainer}>
                        <View style={styles.headerLeftIconContainer}>
                            <IconBack />
                        </View>
                        <View style={styles.headerLeftTextContainer}>
                            <Text>Back</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }
}

const AuthStackScreen = ({ navigation }) => {
    return (
        <Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
            <Screen
                name="SignIn"
                component={SignInScreen}
                options={() => setSignInScreenHeaderOptions(navigation)} />
        </Navigator>
    );
};


const styles = StyleSheet.create({
    headerLeftContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    headerLeftIconContainer: {

    },
    headerLeftTextContainer: {
        paddingLeft: 8
    }
})


export default AuthStackScreen;
