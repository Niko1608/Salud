import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Button, Icon } from '@rneui/themed';

const AddFood = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.addFoodContainer}>
                <View style={styles.legendContainer}>
                    <Text style={styles.addFoodLegend}>Add Food</Text>
                </View>
                <View style={styles.addFoodBtnContainer}>
                    <Button
                        icon={<Icon name="add-circle-outline" color="white" />}
                        radius='lg'
                        color='#77dd77'

                    />
                </View>
            </View>
            <View style={styles.inputContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#FFF',
        flex: 1,
    },
    addFoodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    legendContainer: {
        flex: 1,
    },
    addFoodBtnContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    addFoodLegend: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flex: 1,
    },
});

export default AddFood;