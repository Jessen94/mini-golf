import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { storeData } from '../data/data';
import { NewGameProps } from '../data/types';
import * as Screens from '../global/constants'

const NewGame = ({ navigation }: NewGameProps) => {
  const [gameName, setGameName] = useState('')
  const [gameSettings, setGameSettings] = useState({ player: 0, holes: 0 })

  const createGame = (players: number, holes: number) => {
    return {
      game_name: gameName,
      players: players,
      holes: holes,
      ended: false,
      score: []
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>New game</Text>
      <View>
        <Text style={styles.text}>Game name</Text>
        <TextInput style={{ textAlign: 'center' }} onChangeText={setGameName} value={gameName} placeholder={'Type in game name'} />
        <Text style={styles.text}>Number of players</Text>
        <View style={styles.input}>
          <NumericInput onChange={value => setGameSettings({ player: value, holes: gameSettings.holes })} minValue={0} maxValue={6} />
        </View>
        <Text style={styles.text}>Number of holes</Text>
        <View style={styles.input}>
          <NumericInput 
            onChange={value => 
              setGameSettings({ player: gameSettings.player, holes: value })} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            storeData(gameName, JSON.stringify(createGame(gameSettings.player, gameSettings.holes))).then(() => navigation.navigate(Screens.Game, { gamename: gameName }))
          }
          }>
          <Text style={styles.buttonText}>
            Create game
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
  text: {
    marginTop: 15,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  buttonText: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
});


export default NewGame;
