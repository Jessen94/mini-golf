import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getGame } from '../data/data';
import { GameProps, gamestype } from '../data/types';
import dataStructure from '../data/dataStructure.json';

const Game = ({ navigation, route }: GameProps) => {
  const [game, setGame] = useState(dataStructure);

  const { gamename } = route.params

  useEffect(() => {
    getGame(gamename, setGame)
  }, [])
  

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{game.game_name}</Text>
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


export default Game;
