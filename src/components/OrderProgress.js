import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderStep from './OrderStep';


const orderProgress = () => {
    const orderId = '123222232'
    const steps = [
        {
            order: 0,
            name: 'Order Placed',
            isCompleted: true,
            date: '2020-10-10'
        },
        {
            order: 2,
            name: 'Packed',
            isCompleted: true,
            date: '2020-10-11'
        },
        {
            order: 3,
            name: 'Out for Delivery',
            isCompleted: false,
            date: '2020-10-11'
        },
        {
            order: 4,
            name: 'Delivered',
            isCompleted: false,
            date: '2020-10-11'
        }
    ]

    const sortedSteps = steps.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    })

    const stepsJsx = sortedSteps.map((step) => {
        const isFirstStep = step.order === sortedSteps[0].order;
        const isLastStep = step.order === sortedSteps[sortedSteps.length - 1].order;

        if (isFirstStep) {
            return <OrderStep key={step.order} date={step.date} stepText={step.name} isFirstStep={isFirstStep} isLastStep={isLastStep} isCompleted={step.isCompleted} />
        }
        else if (isLastStep) {
            return <OrderStep key={step.order} date={step.date} stepText={step.name} isFirstStep={isFirstStep} isLastStep={isLastStep} isCompleted={step.isCompleted} />
        }
        else {
            return <OrderStep key={step.order} date={step.date} stepText={step.name} isFirstStep={isFirstStep} isLastStep={isLastStep} isCompleted={step.isCompleted} />
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.orderIdContainer}>
                <Text style={styles.orderId}>Order #{orderId}</Text>
            </View>
            <View style={styles.orderProgressContainer}>
                {stepsJsx}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // backgroundColor: '#F9F1DB'
    },
    orderIdContainer: {
        marginBottom: 14
    },
    orderId: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 16
    },
    orderProgressContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})


export default orderProgress;
