import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({ children, showBorder = true }) => {
    return (
        <View style={styles.container(showBorder)}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: (showBorder) => ({
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: showBorder ? 1 : 0,
        borderBottomColor: '#dadada',
        width: '100%'
    })
})