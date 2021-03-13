import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';

const OTPInput = ({ onEnterPin, onClearPin }) => {
    const [pin, setPin] = useState(0);
    const [firstDigit, setFirstDigit] = useState('');
    const [secondDigit, setSecondDigit] = useState('');
    const [thirdDigit, setThirdDigit] = useState('');
    const [fourthDigit, setFourthDigit] = useState('');

    const firstDigitRef = useRef('');
    const secondDigitRef = useRef('');
    const thirdDigitRef = useRef('');
    const fourthDigitRef = useRef('');

    useEffect(() => {
        if (fourthDigit && !pin) {
            let pin = 0;
            if (firstDigit !== '' && secondDigit !== '' && thirdDigit !== '' && fourthDigit !== '') {
                pin = pin * 10 + parseInt(firstDigit);
                pin = pin * 10 + parseInt(secondDigit);
                pin = pin * 10 + parseInt(thirdDigit);
                pin = pin * 10 + parseInt(fourthDigit);
                setPin(pin)
                onEnterPin(pin);
            }
        }
        else if (pin) {
            setPin(0);
            onClearPin();
        }
    }, [fourthDigit]);

    return (
        <View style={styles.otpInputContainer}>
            <View style={{ ...styles.digitContainer, ...styles.firstDigitContainer }}>
                <TextInput
                    ref={firstDigitRef}
                    keyboardType="number-pad"
                    value={firstDigit}
                    maxLength={1}
                    style={styles.digitInputBox}
                    onChange={(event) => {
                        const value = event.nativeEvent.text;
                        setFirstDigit(value);
                        setSecondDigit('');
                        setThirdDigit('');
                        setFourthDigit('');

                        if (value !== '') {
                            secondDigitRef.current.focus();
                        }
                    }}
                />
            </View>
            <View style={styles.digitContainer}>
                {/* todo: move literals to constant */}
                <TextInput
                    ref={secondDigitRef}
                    keyboardType="number-pad"
                    value={secondDigit}
                    maxLength={1}
                    style={styles.digitInputBox}
                    onKeyPress={(event) => {
                        // todo: move string literals to constant
                        if (event.nativeEvent.key === 'Backspace') {
                            if (secondDigit === '') {
                                firstDigitRef.current.focus();
                            }
                        }
                    }}
                    onChange={(event) => {
                        const value = event.nativeEvent.text;
                        setSecondDigit(value);
                        setThirdDigit('');
                        setFourthDigit('');

                        if (value !== '') {
                            thirdDigitRef.current.focus();
                        }
                    }}
                />
            </View>
            <View style={styles.digitContainer}>
                <TextInput
                    ref={thirdDigitRef}
                    keyboardType="number-pad"
                    value={thirdDigit}
                    maxLength={1}
                    style={styles.digitInputBox}
                    onKeyPress={(event) => {
                        // todo: move string literals to constant
                        if (event.nativeEvent.key === 'Backspace') {
                            if (thirdDigit === '') {
                                secondDigitRef.current.focus();
                            }
                        }
                    }}
                    onChange={(event) => {
                        const value = event.nativeEvent.text;
                        setThirdDigit(value);
                        setFourthDigit('');

                        if (value !== '') {
                            fourthDigitRef.current.focus();
                        }
                    }}
                />
            </View>
            <View style={{ ...styles.digitContainer, ...styles.lastDigitContainer }}>
                <TextInput
                    ref={fourthDigitRef}
                    keyboardType="number-pad"
                    value={fourthDigit}
                    maxLength={1}
                    style={styles.digitInputBox}
                    onKeyPress={(event) => {
                        // todo: move string literals to constant
                        if (event.nativeEvent.key === 'Backspace') {
                            if (fourthDigit === '') {
                                thirdDigitRef.current.focus();
                            }
                        }
                    }}
                    onChange={(event) => {
                        const value = event.nativeEvent.text;
                        setFourthDigit(value);
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otpInputContainer: {
        width: '100%',
        borderRadius: 6,
        flexDirection: 'row'
    },
    digitContainer: {
        borderWidth: 2,
        borderColor: '#248fdd',
        flex: 1,
        marginHorizontal: 4,
        borderRadius: 6
    },
    firstDigitContainer: {
        marginLeft: 0
    },
    lastDigitContainer: {
        marginRight: 0
    },
    digitInputBox: {
        // lineHeight: 30,
        fontSize: 22,
        paddingVertical: 4,
        textAlign: 'center'
    }
})

export default OTPInput;