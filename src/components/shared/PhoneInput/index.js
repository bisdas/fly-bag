import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const PhoneInput = ({ countryCode, onChange, maxLength, placeholder }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputField}>
                <View style={styles.phoneInputContainer}>
                    <View style={styles.phoneInputLabelContainer}>
                        <Text style={styles.phoneInputLabel}>{countryCode}</Text>
                    </View>
                    <View style={styles.phoneInputTextInputContainer}>
                        <TextInput
                            keyboardType="number-pad"
                            maxLength={maxLength}
                            placeholder={placeholder}
                            style={styles.phoneInputBox}
                            onChange={onChange}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignContent: 'center'
    },
    inputField: {
        width: '100%',
        alignItems: 'center'
    },
    phoneInputContainer: {
        borderWidth: 2,
        borderColor: '#248fdd',
        width: '100%',
        borderRadius: 6,
        flexDirection: 'row'
    },
    phoneInputLabelContainer: {

    },
    phoneInputTextInputContainer: {
        flex: 1,
        paddingRight: 10
    },
    phoneInputLabel: {
        // lineHeight: 30,
        fontSize: 22,
        marginHorizontal: 10,
        marginVertical: 0,
        paddingVertical: 6
    },
    phoneInputBox: {
        // lineHeight: 30,
        fontSize: 22,
        paddingVertical: 6,
        letterSpacing: 2,
        // paddingBottom: 0,
        // paddingTop: 0,
        flex: 1,


    }
})

export default PhoneInput;