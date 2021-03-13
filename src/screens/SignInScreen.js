import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native';
import PhoneInput from '../components/shared/PhoneInput';
import OTPInput from '../components/shared/OTPInput';
import AuthenticationImage from '../assets/images/Authentication.svg';

const SignInScreen = () => {
    // todo: move to redux
    const [OTP, setOTP] = useState(null);

    const onEnterPin = (pin) => {
        Alert.alert(`You entered ${pin}`);
        setOTP(pin);
    }

    const onClearPin = () => {
        console.log('pin cleared')
        setOTP(null);
    }

    // todo: move to constants
    const countryCode = '+91';
    return (
        <View style={styles.container}>
            {/* <View style={styles.loginHeaderTextContainer}>
                <Text style={styles.loginHeaderText}>Sign in</Text>
            </View> */}
            <View style={styles.loginBannerContainer}>
                <View style={styles.bannerImageContainer}>
                    <AuthenticationImage height={150} width={150} />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <PhoneInput
                        countryCode={countryCode}
                        placeholder="Mobile Number"
                        maxLength={10}
                        onChange={() => { }}
                    />
                </View>
                <View style={styles.inputField}>
                    <OTPInput onEnterPin={onEnterPin} onClearPin={onClearPin} />
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.actionButton}>
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <Text style={styles.actionButtonText}>Get OTP</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    loginBannerContainer: {
        // flex: 1,
        flexDirection: 'column'
    },
    bannerImageContainer: {
        // flex: 1,
        marginVertical: 40,
        alignContent: 'center'
    },
    loginHeaderTextContainer: {
        paddingVertical: 10,
        width: '100%'
    },
    loginHeaderText: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    inputContainer: {
        // flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    inputField: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 14
    },
    actionContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    actionButton: {
        width: 'auto',
        paddingVertical: 6,
        paddingHorizontal: 20,
        backgroundColor: '#0079bd',
        borderRadius: 4
    },
    actionButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default SignInScreen;