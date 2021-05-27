import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';

import MyBooks from './myBooks';
import Feeds from './feeds';
import Favourites from './favourites';
import BookScreen from './book';

//StackNavigator
const MyBooksStack = createStackNavigator({
    MyBooks: MyBooks,
    Book: BookScreen
});

const FeedsStack = createStackNavigator({
    Feeds: Feeds,
    Book: BookScreen
});

const FavouritesStack = createStackNavigator({
    Favourites: Favourites,
    Book: BookScreen
});

const TabNavigator = createBottomTabNavigator({
    FeedsScreen:{
        screen: FeedsStack,
        navigationOptions:{
            tabBarLabel: 'Feeds',
            tabBarIcon: ()=>(
                <MaterialIcons name='home' size={22} color={'grey'}/>
            )
        },
    },
    FavScreen:{
        screen: FavouritesStack,
        navigationOptions:{
            tabBarLabel: 'Favourites',
            tabBarIcon: ()=>(
                <MaterialIcons name='favorite' size={22} color={'grey'}/>
            )
        }
    },
    BookScreen:{
        screen: MyBooksStack,
        navigationOptions:{
            tabBarLabel: 'MyBooks',
            tabBarIcon: ()=>(
                <MaterialCommunityIcons name='bookshelf' size={22} color={'grey'}/>
            ),
        }
    }
});

export default createAppContainer(TabNavigator);