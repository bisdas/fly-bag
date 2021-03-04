import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';


const orderStep = ({ stepText, isFirstStep, isLastStep, isCompleted, date }) => {
    const iconName = 'ellipse';
    const iconSize = 20;
    const iconColor = isCompleted ? '#2CA95A' : '#D7D7D7';
    const showLineBefore = !isFirstStep;
    const showLineAfter = !isLastStep;

    return (
        <View style={styles.step}>
            <View style={styles.indicatorContainer}>
                {showLineBefore && <View style={styles.progressLine(isCompleted)} />}
                <View>
                    {/* <Icon name={iconName} size={iconSize} color={iconColor} /> */}
                </View>
                {showLineAfter && <View style={styles.progressLine(isCompleted)} />}
            </View>
            <View style={styles.textContainer(isFirstStep, isLastStep)}>
                <Text style={styles.text}>{stepText}</Text>
            </View>
            {date &&
                <View style={styles.dateContainer(isFirstStep, isLastStep)}>
                    <Text style={styles.date}>{moment(date).format('MMM DD')}</Text>
                </View>
            }
        </View>
    )
}

const getTextAlignment = (isFirstStep, isLastStep) => {
    let alignment;
        
    if (isFirstStep) {
        alignment = 'flex-start'
    }
    else if (isLastStep) {
        alignment = 'flex-end'
    }
    else {
        alignment = 'center'
    }

    return alignment;
}

const styles = StyleSheet.create({
    step: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    indicatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    progressLine: (isCompleted) => {
        return {
            flex: 1,
            height: 3,
            backgroundColor: isCompleted ? '#2CA95A' : '#DADADA'
        }
    },
    text: {
        fontSize: 12,
    },
    date: {
        fontSize: 12,
        color: '#505050'
    },
    textContainer: (isFirstStep, isLastStep) => {
        return {
            alignItems: getTextAlignment(isFirstStep, isLastStep)
        }
    },
    dateContainer: (isFirstStep, isLastStep) => {
        return {
            alignItems: getTextAlignment(isFirstStep, isLastStep)
        }
    }

})


export default orderStep;
