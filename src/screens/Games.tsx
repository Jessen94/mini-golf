import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { getAllValues } from '../data/data';
import dataStructure from '../data/dataStructure.json';
import { GamesProps, gamestype } from '../data/types';
import * as Screens from '../global/constants'


const Games = ({ navigation }: GamesProps) => {
    const [data, setData] = useState([dataStructure])

    useEffect(() => {
        getAllValues(setData)
    }, [])

    const renderitem = (item: gamestype) => {
        return <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate(Screens.Game, { gamename: item.game_name })
            }
            }>
            <Text style={styles.buttonText}>
                {item.game_name}
            </Text>
        </TouchableOpacity>
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Old Games</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={item => item.game_name}
            />
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
    button: {
        marginTop: 30,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
    },
});

export default Games;

