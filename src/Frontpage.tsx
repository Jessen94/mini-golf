import React from 'react';
import Logo from './components/Logo';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Screens from './global/constants';
import { FrontpageProps } from './data/types';

const Frontpage = ({ navigation }: FrontpageProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline} >Mini Golf</Text>
            <Logo style={styles.logo} size={60} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate(Screens.NewGame)} >
                    <Text style={styles.text}>
                        New Game
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate(Screens.Games)} >
                    <Text style={styles.text}>
                        Old Games
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        marginBottom: 50,
        color: 'black',
        fontSize: 50,
    },
    logo: {
        margin: 50,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    },
    buttons: {
        margin: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    text: { 
        fontSize: 25,
        margin: 10,
    }
});

export default Frontpage;
