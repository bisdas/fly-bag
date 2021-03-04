import React from 'react';
import { View, ScrollView, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import OrderProgress from './../components/OrderProgress';
import SearchBox from './../components/SearchBox';
import Section from '../components/shared/Section';
import SectionHeader from '../components/shared/SectionHeader';
import TopSellingProducts from '../components/TopSellingProducts';

import Settings from './../constants/settings';
import UserSettings from './../constants/userSettings';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topActionsContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Categories') }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Categories</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.searchBoxContainer}>
                    <SearchBox />
                </View>
            </View>
            <ScrollView style={styles.contentContainer}>
                <Section>
                    <SectionHeader text="Your Order Status" />
                    <View style={styles.orderProgressContainer}>
                        <OrderProgress />
                    </View>
                </Section>
                <Section>
                    <SectionHeader text="Top Selling Products" action={{ text: 'View All', onPress: () => {}}} />
                    <TopSellingProducts/>
                </Section>
                <Section>
                    <SectionHeader text="Shop By Category" action={{ text: 'View All', onPress: () => {}}} />
                </Section>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    topActionsContainer: {
        backgroundColor: Settings.themes[UserSettings.selectedTheme].HeaderBackgroundColor,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 14,
        flexDirection: 'row'
    },
    contentContainer: {
        paddingHorizontal: 10,
        width: '100%'
    },
    button: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 3,
        marginRight: 10
    },
    orderProgressContainer: {
        backgroundColor: '#fff',
        marginVertical: 10,
        width: '100%',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#9B9B9B',
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    searchBoxContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        flex: 1,
    },
    sectionHeader: {

    },
    topSellingProducts: {
        marginVertical: 10
    }
})

export default HomeScreen;