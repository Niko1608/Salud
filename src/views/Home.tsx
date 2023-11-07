import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';

import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const Home = () => {
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

    const handleAddCaloriesPress = () => {
        navigate('AddFood');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.caloriesContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.caloriesText}>Calories</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Button
                        icon={<Icon name="add-circle-outline" color="white" />}
                        radius='lg'
                        color='#77dd77'
                        onPress={handleAddCaloriesPress}
                    />
                </View>
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
    caloriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    caloriesText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
});

export default Home;