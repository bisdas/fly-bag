import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import IconMenu from '../../assets/icons/IconMenu.svg';

const menuIcon = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <IconMenu height={30} width={28} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 14
    }
})

export default menuIcon;