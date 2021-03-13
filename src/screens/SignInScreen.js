import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native';
import PhoneInput from '../components/shared/PhoneInput';
import OTPInput from '../components/shared/OTPInput';
import AuthenticationImage from '../assets/images/Authentication.svg';
import { requestOTP } from '../services/SignInService';

const SignInScreen = () => {
    // todo: move to redux
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [OTPEnteredByUser, setOTPEnteredByUser] = useState(null);
    const [OTPSentToPhone, setOTPSentToPhone] = useState(null);
    const [OTPSentMessage, setOTPSentMessage] = useState(null);
    const [message, setMessage] = useState(null);

    const getOtp = () => {
        requestOTP(phoneNumber)
            .then((data) => {
                setOTPSentToPhone(data);
                setOTPSentMessage('Enter the OTP sent to your phone')
            })
            .catch((error) => {
                Alert.alert('OTP send error')
            });
    }

    // todo: move to utils
    const verifyOtp = (OTPEnteredByUser, OTPSentToPhone) => {
        if (OTPEnteredByUser.toString() === OTPSentToPhone.toString()) {
            Alert.alert('OTP verified');
        }
        else {
            Alert.alert('Incorrect OTP');
        }
    }

    const onEnterPin = (pin) => {
        setOTPEnteredByUser(pin);
    }

    const onClearPin = () => {
        setOTPEnteredByUser(null);
    }

    const onEnterPhoneNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
    }

    const onClearPhoneNumber = () => {
        setPhoneNumber(null);
        setOTPSentToPhone(null);
        setOTPSentMessage(null);
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
                    <AuthenticationImage height={110} width={110} />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <PhoneInput
                        countryCode={countryCode}
                        placeholder="Mobile Number"
                        maxLength={10}
                        onEnterPhoneNumber={onEnterPhoneNumber}
                        onClearPhoneNumber={onClearPhoneNumber}
                    />
                </View>

                {
                    OTPSentToPhone &&
                    <View style={styles.inputField}>
                        <OTPInput onEnterPin={onEnterPin} onClearPin={onClearPin} />
                    </View>
                }

                {
                    /* todo: move literal to constant */
                    // todo: move message component to shared component
                    OTPSentMessage &&
                    <View style={styles.otpSentMessageContainer}>
                        <View>
                            <Text style={styles.message('info', OTPSentMessage)}>{OTPSentMessage}</Text>
                        </View>
                    </View>
                }


                {/* todo: move literal to constant */}
                <View>
                    <View>
                        <Text style={styles.message('info', message)}>{message}</Text>
                    </View>
                </View>

                {
                    !OTPSentToPhone &&
                    <View style={styles.actionContainer}>
                        <View style={styles.actionButton(phoneNumber)}>
                            <TouchableWithoutFeedback onPress={() => { phoneNumber && getOtp() }}>
                                <Text style={styles.actionButtonText}>Get OTP</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                }
                {
                    OTPSentToPhone &&
                    <View style={styles.actionContainer}>
                        <View style={styles.actionButton(OTPEnteredByUser)}>
                            <TouchableWithoutFeedback onPress={() => { OTPEnteredByUser && verifyOtp(OTPEnteredByUser, OTPSentToPhone) }}>
                                <Text style={styles.actionButtonText}>Verify OTP</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                }
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
        marginVertical: 50,
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
    actionButton: (enabled) => ({
        width: 'auto',
        paddingVertical: 6,
        paddingHorizontal: 20,
        // todo: move color codes to theme setting
        backgroundColor: enabled ? '#0079bd' : '#C7C7C7',
        borderRadius: 4
    }),
    actionButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    },
    otpSentMessageContainer: {
        marginBottom: 20
    },
    message: (type, text) => {
        let color = '#000000';
        // todo: move color code to theme, literals to constants
        if (type === 'success') {
            color = '#1aac54'
        }
        else if (type === 'error') {
            color = '#ed0303'
        }

        return {
            display: text ? 'flex' : 'none',
            width: '100%',
            textAlign: 'left',
            fontSize: 16,
            color
        }
    }
})

export default SignInScreen;