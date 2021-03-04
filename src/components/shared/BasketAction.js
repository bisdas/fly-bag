import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Settings from './../../constants/settings';
import UserSettings from './../../constants/userSettings';

const basketAction = ({ countInBasket }) => {
    const text = countInBasket > 0 ? countInBasket : 'ADD';

    return (
        <View style={styles.container}>
            {countInBasket > 0 && (
                <View style={styles.removeButtonContainer}>
                    {/* <Icon name='remove' size={16} color={Settings.themes[UserSettings.selectedTheme].ProductAddToBasketBackgroundColor} /> */}
                </View>
            )}

            <View style={styles.textContainer(text)}>
                <Text style={styles.text}>{text}</Text>
            </View>

            <View style={styles.addButtonContainer}>
                {/* <Icon name='add' size={16} color={Settings.themes[UserSettings.selectedTheme].ProductAddToBasketBackgroundColor} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Settings.themes[UserSettings.selectedTheme].ProductAddToBasketBackgroundColor,
        minWidth: 80,
        flexDirection: 'row',
        borderRadius: 3,
        paddingHorizontal: 4,
        paddingVertical: 4

    },
    addButtonContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        flex: 1,
        alignItems: 'center'
    },
    removeButtonContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        flex: 1,
        alignItems: 'center'

    },
    textContainer: (text) => {
        return {
            flex: 1,
            paddingLeft: text === 'ADD' ? 4 : 3,
            alignItems: text === 'ADD' ? 'flex-start' : 'center',
            minWidth: text === 'ADD' ? 32 : 10
        }
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15
    }
})

export default basketAction;