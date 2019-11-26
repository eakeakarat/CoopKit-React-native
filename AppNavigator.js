import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Register1 from './Register';
import Register2 from './Register2';
import Register3 from './Register3';
import Register4 from './Register4';
import MainPage from './MainPage';
import RecentPage from './RecentPage';
import RoomPage from './RoomPage';
import SearchPage from './SearchPage';
import TypePage from './TypePage';
import Favorite from './FavoritePage';
import LoginPage from './Login';


const AppStack = createStackNavigator({
    SearchPage: {screen: SearchPage},
    Favorite: {screen: Favorite},
    RecentPage: {screen: RecentPage},
    RoomPage: {screen: RoomPage},
    TypePage: {screen: TypePage},
    LoginPage: { screen: LoginPage},
    Register1: { screen: Register1 },
    Register2: { screen: Register2 },
    Register3: { screen: Register3 },
    Register4: { screen: Register4 },
});

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
