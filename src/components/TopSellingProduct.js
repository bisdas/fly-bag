import React from 'react';
import { View, Image, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import BasketAction from './../components/shared/BasketAction';

import { getDiscountPercentage } from './../utils/mathUtils';
import Settings from './../constants/settings';
import UserSettings from './../constants/userSettings';

const topSellingProduct = ({
    imageUrl,
    actualPrice,
    sellingPrice,
    brand,
    title,
    quantity,
    countInBasket,
    currency
}) => {
    // const imageUrl = '../assets/images/basket-with-groceries.jpg';
    // const actualPrice = 330;
    // const sellingPrice = 10;
    // const brand = 'Aashirvaad';
    // const title = 'Superior MP Atta';
    // const quantity = '10 Kg';
    // const countInBasket = 3;
    // const currency = '₹';

    const discountPercentage = getDiscountPercentage(actualPrice, sellingPrice);
    const showDiscount = discountPercentage > 0;
    const showActualPrice = actualPrice !== sellingPrice;

    return (
        <View style={styles.container(showDiscount)}>
            <View style={styles.imageAndDiscount}>
                <View style={styles.discountContainer(showDiscount)}>
                    <Text style={styles.discountText}>{discountPercentage}% OFF</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/basket-with-groceries.jpg')} />
                </View>
            </View>
            <View style={styles.priceContainer}>
                <View style={styles.sellingPriceContainer}>
                    <Text style={styles.sellingPrice}>{currency}{sellingPrice}</Text>
                </View>
                {showActualPrice &&
                    <View style={styles.actualPriceContainer}>
                        <Text style={styles.actualPrice}>{currency}{actualPrice}</Text>
                    </View>
                }
            </View>
            <View style={styles.brandContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.brandText}>{brand}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>{quantity}</Text>
            </View>
            <View style={styles.basketActionContainer}>
                <BasketAction countInBasket={countInBasket} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: (showDiscount) => {
        return {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowColor: '#9B9B9B',
            shadowOffset: {
                width: 0,
                height: 0
            },
            backgroundColor: '#FFF8EC',
            borderRadius: 4,
            padding: 16,
            paddingRight: showDiscount ? 30 : 16,
            marginRight: 10,
            minHeight: 320
        }
    },
    imageContainer: {
        borderRadius: 2,
        overflow: 'hidden',
        top: -22
    },
    image: {
        height: 120,
        width: 100,
        zIndex: 1
    },
    priceContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        top: -20
    },
    sellingPriceContainer: {

    },
    actualPriceContainer: {

    },
    actualPrice: {
        fontSize: 15,
        marginTop: 2,
        textDecorationLine: 'line-through',
        color: Settings.themes[UserSettings.selectedTheme].ProductPriceActualColor
    },
    sellingPrice: {
        fontWeight: 'bold',
        fontSize: 17,
        marginRight: 12,
        color: Settings.themes[UserSettings.selectedTheme].ProductPriceSellingColor
    },
    brandContainer: {
        top: -20
    },
    titleContainer: {
        maxWidth: 150,
        top: -20,
        minHeight: 36.5
    },
    quantityContainer: {

    },
    basketActionContainer: {
        marginTop: 4,
        alignSelf: 'flex-start'
    },
    quantityText: {
        fontSize: 15,
        color: '#444444'
    },
    titleText: {
        fontSize: 15,
        width: 118
    },
    brandText: {
        fontSize: 15,
        width: 114
    },
    quantityContainer: {
        top: -10
    },
    discountContainer: (showDiscount) => {
        return {
            backgroundColor: showDiscount ? '#2DBB5D' : 'transparent',
            paddingVertical: 3,
            paddingHorizontal: 4,
            maxHeight: 22,
            left: 68,
            top: -10,
            maxWidth: 66,
            textAlign: 'center',
            zIndex: 2
        }
    },
    discountText: {
        color: '#FFFFFF',
        fontSize: 13,
        width: '100%',
        textAlign: 'center'
    },
    imageAndDiscount: {
      
    }
})

export default topSellingProduct;