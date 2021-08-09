import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Dispatch, SetStateAction } from 'react'
import { gamestype } from './types';


export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value).then(() => console.info('Stored data with key', key));
    } catch (e) {
        console.error('Save failed', e);
    };
};

const extractValues = (values: [string, string | null][]): gamestype[] => {
    let games: gamestype[] = []
    values.forEach((element: [string, string | null]) => {
        if (element[1]) games.push(JSON.parse(element[1]))
    });
    return games;
}


export const getAllValues = async (stateMethod: Dispatch<SetStateAction<gamestype[]>>) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        stateMethod(extractValues(values));
    } catch (e) {
        console.error('Read failed', e)
    }
}

export const getGame = async (key: string, stateMethod: Dispatch<SetStateAction<gamestype>>) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value) stateMethod(JSON.parse(value));
    } catch (e) {
        console.error('Read failed', e)
    }
}