import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Settings from '../../../constants/settings'

export default ({ icon, itemText, rightPanelText, rightPanelTextStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.leftPanel}>
                    <View style={styles.leftPanelIconContainer}>
                        {icon}
                    </View>
                    <View style={styles.leftPanelTextContainer}>
                        <Text style={styles.leftPanelText}>{itemText}</Text>
                    </View>
                </View>
                <View style={styles.rightPanel}>
                    <Text style={{ ...styles.rightPanelTextBaseStyle, ...rightPanelTextStyle }}>{rightPanelText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8
    },
    leftPanel: {
        flex: 1,
        flexDirection: 'row'
    },
    leftPanelIconContainer: {
        
    },
    leftPanelTextContainer: {
        marginLeft: 16
    },
    leftPanelText: {
        lineHeight: 34,
        fontSize: 16
    },
    rightPanel: {
        
    },
    rightPanelTextBaseStyle: {
        lineHeight: 34,
        textAlign: 'right',
        color: '#000000'
    }
})