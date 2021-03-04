import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OrdersLogo from '../assets/icons/Orders.svg'

const OrdersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is my orders screen!</Text>
            <OrdersLogo/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    }
})

export default OrdersScreen;