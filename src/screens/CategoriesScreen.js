import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Category from '../components/Category';

import { getAllCategories } from './../utils/categoryUtils';


const CategoriesScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (categories.length === 0) {
            const categories = getAllCategories()
                .then((data) => {
                    setIsLoading(false);
                    setCategories(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [categories, isLoading]);

    const renderCategory = ({ item, index }) => {
        return <Category
            key={item.id}
            id={item.id}
            title={item._data.title}
            description={item._data.description}
        />
    }

    const jsx = isLoading
        ? (
            <View style={styles.loaderContainer}>
                <Text>Loading</Text>
            </View>
        )
        : (
            <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={categories}
                style={styles.container}
                renderItem={renderCategory}
            >
            </FlatList >
        )

    return jsx;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    loaderContainer: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center'
    }
})

export default CategoriesScreen;