
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
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
  Image,
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
      <View style={{flex: 1,flexDirection: 'column',}}>
        <View style={{flexDirection: 'row' ,backgroundColor:'white', flex: 0.1,}}>
          <BackButton text="Setting" f={0.15} />
          <NormalText text="Co-op Kit" f={0.5}/>
          <ShareButton text="Search" f={0.15}/>
          <FavButton text="Menu" f={0.2}/>
        </View>
         
        <View style={{flexDirection: 'column',flex: 0.82}}>
          <View style={{flex:0.5,margin:10}}>
            <TextInput style={{flex:0.5,borderWidth: 1}}/>
            <Text> Text:  </Text>
            <Text> Text: ........................ </Text>
          </View>

          <View style={{flex:0.5}}>
            <View style={{flex: 1 ,borderWidth: 1}}>
              <Text> Test</Text>
              <PicBox/>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row',backgroundColor:'grey', flex: 0.08}}>
          <Text style={{flex:0.25}} > Text </Text>
        </View>
      </View>
    );
  }
}


class NormalText extends Component {
  render() {
    let w = this.props.f;
    return <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
    <Text >{this.props.text}</Text>
    </View>;
  }
};
class BackButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableHighlight onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/back.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableHighlight>
      </View>
    );
  }
};
class FavButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableHighlight onPress={this.clicked} 
        // underlayColor="red"
        >
          <Image resizeMode="center"
            source={require('./image/star.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableHighlight>
      </View>
    );
  }
};
class ShareButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableHighlight onPress={this.clicked} 
        // underlayColor="red"
        >
          <Image resizeMode="center"
            source={require('./image/share.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 0.8}}
          />
        </TouchableHighlight>
      </View>
    );
  }
};
class TextBox extends Component {
  constructor(props){
    super(props)
    this.state = {text : ''};
  }
  render() {
    return(
        <View style={Styles.textBox}>
          <TextInput placeholder={this.props.place}
            onChangeText = {(text) => this.setState({text})}
          />
          <Text style={{
            fontSize: 42
          }}> 
            {this.state.text} 
          </Text>
        </View>
    );
  }
};
class PicBox extends Component {
  constructor(props){
    super(props)
    this.state = {text : ''};
  }
  render() {
    return(
        <View style={{margin:10}}>
          <Image resizeMode="center"
            source={require('./image/star.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 0.2}}
          />
        </View>
    );
  }
};


// RoomPic
// RoomType
// RoomStatus
// RoomDate
// RoomDecription
// RoomName

const Styles = StyleSheet.create({
  center: {
    justifyContent:'center',
    alignItems:'center',
  },
  textBox: {
    // justifyContent:'center',
    // alignItems:'center',
    // borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    flex: 0.2,
    // width: 250,
    // height: 100
  },
  roomBox:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    // flexDirection:'row',
    // flex:1,
    // alignItems: 'center',
    // justifyContent:'center',
    width: 250
  }
});

