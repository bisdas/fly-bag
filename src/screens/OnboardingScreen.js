import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../assets/images/shopping-handba.jpg')} />,
                    title: 'Make a list of you Grocery',
                    subtitle: 'List down all you need right in the app',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../assets/images/foodgrains.png')} />,
                    title: 'Quick Order',
                    subtitle: 'Place an order in just few steps',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../assets/images/pot-seasoning.png')} />,
                    title: 'Easy Payment Options',
                    subtitle: 'Pay online, or Cash / Card on Delivery!! Haha why not!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../assets/images/basket-with-groceries.jpg')} />,
                    title: 'Choose Your Delivery Window',
                    subtitle: 'Choose your delivery time from multiple options',
                }
          ]} />
    )
}


const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    }
})

export default OnboardingScreen;

