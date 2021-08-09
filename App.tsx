import React from 'react';
import { View, Text } from 'react-native';
import Frontpage from './src/Frontpage';
import NewGame from './src/screens/NewGame';
import * as Screens from './src/global/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PreviousGames from './src/screens/PreviousGames';
import Game from './src/screens/Game';
import Games from './src/screens/Games';
import { StackNavigatorParams } from './src/data/types';


const { Screen, Navigator } = createStackNavigator<StackNavigatorParams>();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigator
          initialRouteName={Screens.Frontpage}
          headerMode='none'
        >
          <Screen name={Screens.Frontpage} component={Frontpage} />
          <Screen name={Screens.NewGame} component={NewGame} />
          <Screen name={Screens.PreviousGames} component={PreviousGames} />
          <Screen name={Screens.Game} component={Game} />
          <Screen name={Screens.Games} component={Games} />
        </Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
