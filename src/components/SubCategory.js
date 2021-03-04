import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowDimensions = Dimensions.get('window');

const subCategory = ({ items, numberOfColumns }) => {

    const renderItem = ({ item, index }) => {
        if (item.empty) {
            return <View style={[styles.item(numberOfColumns), styles.itemInvisible]}></View>
        }

        return (
            <View style={styles.item(numberOfColumns)} key={item.id}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/pot-seasoning.png')} />
                </View>
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        )
    }

    const formatData = (items, numberOfColumns) => {
        const numberOfFullRows = Math.floor(items.length / numberOfColumns);
        let numberOfElementsInLastRow = items.length - (numberOfFullRows * numberOfColumns);

        while (numberOfElementsInLastRow !== numberOfColumns && numberOfElementsInLastRow !== 0) {
            items.push({ key: `blank-${numberOfElementsInLastRow}`, empty: true });
            numberOfElementsInLastRow++;
        }

        return items;
    }

    return (
        <FlatList
            data={formatData(items, numberOfColumns)}
            style={styles.container}
            renderItem={renderItem}
            numColumns={numberOfColumns}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: (numberOfColumns) => {
        return {
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            overflow: 'hidden',
            height: windowDimensions.width / numberOfColumns
        }
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    imageContainer: {
        backgroundColor: '#FFFFFF'
    },
    image: {
        height: 100,
        width: 100,
        backgroundColor: '#FFFFFF'
    }
})


export default subCategory;
