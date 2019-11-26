import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image , Icon } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
// import DrawerExample from './TestDrawer';
// import NextPage from './Register';

import HomeScreen from "./Register.js";
import MainScreenNavigator from "./Register2.js";
import Profile from "./Register3.js";
// import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
export default class HomeScreenRouter {
  render(){
    return (
      DrawerNavigator(
        {
          Home: { screen: HomeScreen },
          Chat: { screen: MainScreenNavigator },
          Profile: { screen: Profile }
        },
      )
    );
  }
}

