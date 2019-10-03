/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
// import Buuton from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <Text style={{color: 'red'}}>Welcome</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}>
          {/* <Button
            style={{width: 700}}
            title="Button 1"
            icon={<Icon name="arrow-right" size={15} color="white" />}
          /> */}
          <User text="fuckingReact" />
        </View>
        <Button
          containerStyle={{color: 'red'}}
          title="Button 2"
          icon={<Icon name="arrow-right" size={15} color="white" />}
        />

        <Text></Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{backgroundColor: 'red',flex:1}}>
            <Button title="Test" />
          </View>
          <View style={{backgroundColor: 'pink',flex:1}}>
            <Button color="black" title="Test" />
          </View>
        </View>
      </View>
    );
  }
}
class User extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}


