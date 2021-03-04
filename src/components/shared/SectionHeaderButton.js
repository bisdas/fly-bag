import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Settings from '../../constants/settings';
import UserSettings from './../../constants/userSettings';

const sectionHeaderButton = ({ text, onPress, showButton }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 2
    },

    text: {
        color: Settings.themes[UserSettings.selectedTheme].SectionHeaderButtonTextColor,
        fontWeight: 'bold'
    }
})

export default sectionHeaderButton;