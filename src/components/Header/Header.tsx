import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const staticInfo = {
    name: 'Nicolas Cortes',
    uri: 'https://avatars.githubusercontent.com/u/118652567?v=4'
};

const Header = () => {
    const { canGoBack, goBack } = useNavigation();

    return (
        <View style={styles.container}>
            {canGoBack() ? (
                <View style={styles.arrowContainer}>
                    <Button
                        icon={<Icon name="arrow-back" size={24} />}
                        type='clear'
                        onPress={() => goBack()}
                    />
                </View>
            ) : undefined}

            <View style={styles.leftContainer}>
                <Text style={styles.nameText}>{`Hello ${staticInfo.name}`}</Text>
                <Text style={styles.subtitleText}>Welcome back to you goal</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{ uri: staticInfo.uri }} style={styles.profileImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    arrowContainer: {
        marginLeft: -12,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitleText: {
        fontSize: 12,
        color: '#989FA7'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 24,
    },
});

export default Header;