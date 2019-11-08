
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
  TouchableOpacity,
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
          {/* <SettingButton text="Setting" f={0.15} /> */}
          <NormalText text="Co-operative Kit" f={0.6}/>
          <SearchButton text="Search" f={0.2} />
          <FilterButton text="Menu" f={0.2} />
        </View>

        <View style={{flexDirection: 'row',backgroundColor:'red', flex: 0.07}}>
          <SecondField text="menu1" f={0.25} />
          <SecondField text="menu1" f={0.25} />
          <SecondField text="menu1" f={0.25} />
          <SecondField text="menu1" f={0.25} />          
        </View>
        
        <ScrollView style={{flexDirection: 'column',flex: 0.75,marginTop: 10}}>
          <View style={{alignItems:'center'}}>
            <View style={Styles.roomBox} >
            {/* <View> */}
            {/* <View style={Styles.hasBorder}> */}
              {/* <TextBox place="Type here!"/> */}

              <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                <RoomPic/>
                <View style={{flex:1,flexDirection:'row',
                justifyContent:'flex-end',alignItems:'flex-end'}}>
                  {/* <RoomDate/> */}
                </View>
              </View>
              <View style={{flexDirection:'row',borderTopWidth:1,marginTop:10}}>
                <RoomDecription/>
                <RoomDecription/>
              </View>
              <View style={{flexDirection:'row'}}>
                <RoomType/>
                <RoomType/>
                <View style={{flex:1,alignItems:'flex-end',marginRight: 10}}>
                  <RoomStatus/>
                </View>
              </View>
            </View>
          </View>
      
        </ScrollView>

        <View style={{flexDirection: 'row',backgroundColor:'grey', flex: 0.1}}>
          <HomeButton f={0.25}/>
          <FavButton f={0.25}/>
          <CommunityButton f={0.25}/>
          <UserButton f={0.25}/>   
        </View>
      </View>
    );
  }
}

class HeaderField extends Component {
  render() {
    let w = this.props.f;
    return <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
    <Text >{this.props.text}</Text>
    </View>;
  }
};
class SecondField extends Component {
  render() {
    let w = this.props.f;
    return <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
    <Text >{this.props.text}</Text>
    </View>;
  }
};
class NormalText extends Component {
  render() {
    let w = this.props.f;
    return <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
    <Text >{this.props.text}</Text>
    </View>;
  }
};
class HomeButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/Home.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableOpacity>
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
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/Favorite.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class CommunityButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/Community.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class UserButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){
    
  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/User.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class SettingButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="grey"
        >
          <Image resizeMode="center"
            source={require('./image/setting.png')}
            style={{justifyContent:'center',alignItems:'center',flex: 1}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class FilterButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="red"
        >
          <Image resizeMode="center"
            source={require('./image/Filter.png')}
            style={{justifyContent:'center',alignItems:'center',
            width: 60,height:60}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class SearchButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    let w = this.props.f;
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex: w}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="red"
        >
          <Image resizeMode="center"
            source={require('./image/Search.png')}
            style={{justifyContent:'center',alignItems:'center',
            width: 40 , height: 40}}
          />
        </TouchableOpacity>
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
class RoomPic extends Component {
  render() {
    return(
        <View >
          <Image resizeMode="center"
            source={require('./image/Search.png')}
            style={{width:250,height:100}}
          />
        </View>
    );
  }
};
class RoomDecription extends Component{
  render() {
    return(
        <View style={{height: 50,marginTop:5}}>
          <Text>
            Text bra bra
          </Text>
        </View>
    );
  }
};
class RoomType extends Component{
  render() {
    return(
        <View style={{
          borderRadius: 40,borderWidth: 1,
          borderColor: 'black',width: 50,alignItems:'center',
          margin: 5
          }}>
          <Text>
            Type
          </Text>
        </View>
    );
  }
};
class RoomStatus extends Component{
  render() {
    return(
        <View style={{
          borderRadius: 4,borderWidth: 1,
          borderColor: 'black',width: 100,height: 25,
          alignItems:'center',
          }}>
          <Text>
            Status
          </Text>
        </View>
    );
  }
};
class RoomDate extends Component{
  render() {
    return(
        <View style={{
          borderRadius: 4,borderWidth: 1,
          borderColor: 'black',width: 150,height: 25,
          alignItems:'center',marginRight:10,backgroundColor:'grey'
          }}>
          <Text>
            Date
          </Text>
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

