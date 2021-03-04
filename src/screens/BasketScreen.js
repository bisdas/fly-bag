import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopSellingProduct from './../components/TopSellingProduct';

const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is my basket screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BasketScreen;