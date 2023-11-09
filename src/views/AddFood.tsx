import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Button, Icon } from '@rneui/themed';
import { Input } from '@rneui/base';
import AddFoodModal from '../components/AddFoodModal';

const AddFood = () => {

    const [visible, setIsVisible] = useState<boolean>(false);

    const handleModalClose = () => {
        setIsVisible(false);
    }

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
                        onPress={() => setIsVisible(true)}
                    />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Input placeholder='apples, fries, soda...' />
                </View>
                <View>
                    <Button
                        title='Search'
                        icon={<Icon name="search" color="#000" />}
                        radius='lg'
                        color='#aeeca8'
                        titleStyle={styles.searchBtn}
                    />
                </View>
            </View>
            <AddFoodModal visible={visible} onClose={handleModalClose} />
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
    searchContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 1,
        marginLeft: -12,
    },
    searchBtn: {
        color: '#000',
        fontSize: 14,
    },
});

export default AddFood;