import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import SectionHeaderButton from './SectionHeaderButton';
import Settings from './../../constants/settings';
import UserSettings from './../../constants/userSettings';


const sectionHeader = ({ navigation, text, action }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
            {action && (
                <View style={styles.actionContainer}>
                    <SectionHeaderButton text={action.text} onPress={action.onPress} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
    },
    textContainer: {
        alignSelf: 'flex-start',
        flex: 1
    },
    actionContainer: {
        alignContent: 'flex-end'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C2C2C',
        color: Settings.themes[UserSettings.selectedTheme].SectionHeaderTextColor
    }
})

export default sectionHeader;