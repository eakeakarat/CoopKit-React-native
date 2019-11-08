
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
      <View style={{flex: 1,alignItems:'center'}}>
        <View style={{flexDirection: 'column',justifyContent:'flex-start',alignItems:'center'}}>
          <UserPic/>
          <UserInput ph='อีเมล์'/>
          <PasswordInput ph='รหัสผ่าน'/>
          <ForgotPassword/>
        </View> 
        <View Styles={{justifyContent:'flex-end',alignItems:'flex-end'}}>
          <CreateAccount/>
          <LoginButton/>
        </View>
      </View>
    );
  }
}


class InputText extends Component {
  
  render() {
    return <View style={{borderWidth: 1,
    margin:10}}>
    <TextInput placeholder={this.props.ph} style={{}}/>
    </View>;
  }
};
class ButtonText extends Component {
  render() {
    return <View style={Styles.center}>
    <Text style={{fontSize:10,marginLeft: 5}} >{this.props.text}</Text>
    </View>;
  }
};
class UserInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{borderWidth: 1,margin:10, flexDirection:'row'}}>
    <View style={{ alignItems:'flex-start', justifyContent:'center',
    flexDirection:'column'}}>
      <Image resizeMode="center"
        source={require('./image/User.png')}
        style={{justifyContent:'center',alignItems:'center',
        width: 40,height: 40}}
      />
    </View>
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}>
    <TextInput placeholder={this.props.ph}/>
    </View>
    {/* <Text> {this.state.eye} </Text> */}
    </View>;
  }
};
class PasswordInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      hide: true,
      // eye: 'Eye.png'
    };      
    
  }
  clicked = () => {      
    this.setState(state => ({
      // eye: state.hide === this.state.hide ? 'EyeWhenClick.png' : 'Eye.png',
      hide: !state.hide,
    }));
  }

  render() {

    return <View style={{borderWidth: 1,margin:10, flexDirection:'row'}}>
    <View style={{ alignItems:'center', justifyContent:'center',
    flexDirection:'column'}}>
      <Image resizeMode="center"
        source={require('./image/Password.png')}
        style={{justifyContent:'center',alignItems:'center',
        width: 40,height: 40}}
      />
    </View>
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}>
      <TextInput secureTextEntry={this.state.hide} placeholder={this.props.ph} value='abc'/>
    </View>
    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
      <TouchableOpacity onPress={this.clicked} 
        // underlayColor="lightgray"
        >
          <Image resizeMode="center"
            source={require('./image/EyeWhenClick.png')}
            style={{justifyContent:'center',alignItems:'center',
            width: 40,height: 40}}
          />
      </TouchableOpacity>
    </View>
    
    {/* <Text> {this.state.eye} </Text> */}
    </View>;
  }
};
class LoginButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'flex-end'}}>
        <TouchableOpacity onPress={this.clicked}>
          <Image resizeMode="center"
            source={require('./image/NextButton.png')}
            style={{justifyContent:'center',alignItems:'center',
            width:150,height:50}}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
class Cancel extends Component{

  clicked(){


  }

  render() {
    return <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Text style={{fontSize:10}}> ยกเลิก </Text>
    </TouchableOpacity>
    </View>;
  }
};
class UserPic extends Component {
  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode="center"
          source={require('./image/User.png')}
          style={{justifyContent:'center',alignItems:'center',}}
        />
      </View>
    );
  }
};
class ForgotPassword extends Component {
  clicked(){


  }

  render() {
    return <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Text style={{fontSize:10,textDecorationLine: 'underline'}}> ลืมรหัสผ่าน </Text>
    </TouchableOpacity>
    </View>;
  }
};
class CreateAccount extends Component {
  clicked(){


  }

  render() {
    return <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Text style={{fontSize:13,textDecorationLine: 'underline'}}> สร้างบัญชีผู้ใช้ </Text>
    </TouchableOpacity>
    </View>;
  }
};


const Styles = StyleSheet.create({
  center: {
    justifyContent:'center',
    alignItems:'flex-start',
    borderWidth: 1,
    flex:0.25,
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

