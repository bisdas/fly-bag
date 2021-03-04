import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is product details screen!</Text>
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

export default ProductListScreen;