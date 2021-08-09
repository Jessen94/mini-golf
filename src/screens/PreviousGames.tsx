import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PreviousGames = () => {
  return (
    <View style={styles.container}>
        <Text>Previous Games</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PreviousGames;