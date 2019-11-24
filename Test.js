
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component, useEffect, useState, useRef } from 'react';
// import Constants from 'expo-constants';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Animated,
  Alert
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
          <View style={styles.gap}></View>
          <View style={styles.progressBar}></View>
          <View style={styles.gap}></View>
          <View style={styles.progressBar}></View>
          <View style={styles.gap}></View>
          <View style={styles.progressBar}></View>
          <View style={styles.gap}></View>
          <View style={styles.progressBar}></View>
          <View style={styles.gap}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',}}>
          <Text> test test test test  </Text>
        </View>
      </View>

    );
  }
}



const styles = StyleSheet.create({
progressBar: {
   height: 20,
   width: '20%',
   backgroundColor: 'green',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },gap: {
    width: '4%'
 }

});

