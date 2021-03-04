import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import TopSellingProduct from '../components/TopSellingProduct';



const HomeScreen = ({ navigation }) => {
    const products = [
        {
            productId: 1,
            imageUrl: '../assets/images/basket-with-groceries.jpg',
            actualPrice: 330,
            sellingPrice: 250,
            brand: 'Aashirvaaddddddddddddddddddd',
            title: 'Superior MP Atta',
            quantity: '10 Kg',
            countInBasket: 0,
            currency: '₹'
        },
        {
            productId: 2,
            imageUrl: '../assets/images/basket-with-groceries.jpg',
            actualPrice: 330,
            sellingPrice: 300,
            brand: 'Aashirvaad',
            title: 'Superior Chakki Atta, really long name, really log name',
            quantity: '10 Kg',
            countInBasket: 3,
            currency: '₹'
        },
        {
            productId: 3,
            imageUrl: '../assets/images/basket-with-groceries.jpg',
            actualPrice: 330,
            sellingPrice: 300,
            brand: 'Aashirvaad',
            title: 'Superior Chakki Atta, really long name, really log name',
            quantity: '10 Kg',
            countInBasket: 1,
            currency: '₹'
        }
    ]
    return (
        <View style={styles.container}>
            {products.map(product => {
                return <TopSellingProduct
                    key={product.productId}
                    imageUrl={product.imageUrl}
                    actualPrice={product.actualPrice}
                    sellingPrice={product.sellingPrice}
                    brand={product.brand}
                    title={product.title}
                    quantity={product.quantity}
                    countInBasket={product.countInBasket}
                    currency={product.currency}
                />
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 10,
        flexDirection: 'row',
    }
})

export default HomeScreen;