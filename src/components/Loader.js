import React from 'react';
import { StyleSheet } from 'react-native';


const loader = () => {
    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#cccccc',
        backgroundColor: '#dddddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexGrow: 1,
        flexBasis: '49%'
    }
})


export default loader;
