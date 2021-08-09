import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';


type player = {
    id: number,
    alias: string,
    score: number
}

type score = {
    holeid: number,
    players: player[]
}

export type gamestype = {
    id: number,
    game_name: string,
    players: number,
    holes: number,
    ended: boolean,
    score: score[]
}


export type StackNavigatorParams = {
    Frontpage: undefined,
    Game: { gamename: string },
    NewGame: undefined,
    PreviousGames: undefined,
    Games: undefined
}

type gameRouteProp = RouteProp<StackNavigatorParams, 'Game'>;

export type FrontpageProps = {
    navigation: StackNavigationProp<StackNavigatorParams>
}

export type NewGameProps = {
    navigation: StackNavigationProp<StackNavigatorParams>
}

export type GameProps = {
    navigation: StackNavigationProp<StackNavigatorParams>
    route: gameRouteProp
}

export type GamesProps = {
    navigation: StackNavigationProp<StackNavigatorParams> 
}