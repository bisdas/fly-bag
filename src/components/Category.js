import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SubCategory from './SubCategory';

const windowDimension = Dimensions.get('window');

const category = ({ id, title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onPressCategory = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <TouchableWithoutFeedback onPress={onPressCategory}>
            <View style={styles.container}>
                <View style={styles.categoryContainer(isExpanded)}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.categoryImage} source={require('../assets/images/edible-oil.jpeg')} />
                    </View>
                    <View style={styles.titleAndDescriptionContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionText}>{description}</Text>
                        </View>
                    </View>
                    <View style={styles.expandContainer}>
                        {/* {!isExpanded
                            ? <Icon name="chevron-down" size={30} color="#000000" />
                            : <Icon name="chevron-up" size={30} color="#000000" />
                        } */}
                    </View>
                </View>
                {isExpanded && (
                    <View style={styles.subCategoryContainer}>
                        <SubCategory categoryId={id} numberOfColumns={2} />
                    </View>
                )}

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowDimension.width,
        marginVertical: 1,
        backgroundColor: '#FFFFFF',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#CACACA',
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    categoryContainer: (isExpanded) => {
        return {
            paddingVertical: 12,
            paddingHorizontal: 16,
            flexDirection: 'row',
            backgroundColor: isExpanded ? '#FFF0D8' : '#FFFFFF'
        }

    },
    imageContainer: {
        paddingHorizontal: 10
    },
    categoryImage: {
        height: 80,
        width: 80,
        zIndex: 1
    },
    titleAndDescriptionContainer: {
        flex: 1
    },
    titleContainer: {
        padding: 10,
        paddingBottom: 0
    },
    titleText: {
        fontSize: 23
    },
    descriptionContainer: {
        padding: 10,
        paddingTop: 4
    },
    descriptionText: {
        fontSize: 17,
        color: '#444444'
    },
    expandContainer: {
        padding: 10
    },
    subCategoryContainer: {
        width: windowDimension.width
    }
})


export default category;
