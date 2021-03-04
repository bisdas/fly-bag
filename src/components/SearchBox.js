import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Settings from './../constants/settings';
import UserSettings from './../constants/userSettings';


const searchBox = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {/* <Icon name="search" size={18} color={Settings.themes[UserSettings.selectedTheme].SearchBoxIconColor} /> */}
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Search for Products &amp; Categories" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    iconContainer: {
        alignItems: 'baseline',
        padding: 6,
        borderColor: 'red',
        // borderWidth: 1
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        paddingVertical: 7,
        borderRadius: 2,
        fontSize: 14
    }
})

export default searchBox;