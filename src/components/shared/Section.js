import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Settings from './../../constants/settings';
import UserSettings from './../../constants/userSettings';


const section = ({ navigation, children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginTop: 10
    },
})

export default section;