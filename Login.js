
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';


export default class App extends Component {
  render() {
    return (
    
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'column',justifyContent:'flex-start',alignItems:'center'}}>
          <View style={{marginTop:50}}>
          <FacebookLogin/>
          </View>
          <View style={{marginBottom:50, marginTop: 30}}>
          <GoogleLogin/>
          </View>
          <View style={{width:250,alignItems:'center'}}>
          <Text> หรือ </Text>
          </View>
          <View style={{marginTop:15, flexDirection: 'column',justifyContent:'flex-start',alignItems:'center'}} >
          <UserInput ph='อีเมล์'/>
          <PasswordInput ph='รหัสผ่าน'/>
          <View style={{marginTop: 10, marginBottom:70}}>
          <ForgotPassword/>
          </View>
          </View>
        </View> 
        <View Styles={{marginTop: 50,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
          <CreateAccount navigation={this.props.navigation}/>
          <View style={{marginTop: 30,alignItems:'center'}}>
          <LoginButton navigation={this.props.navigation}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}


class UserInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{borderBottomWidth: 1, margin:10, flexDirection:'row'}}>
    <View style={{ alignItems:'flex-start', justifyContent:'center',
    flexDirection:'column'}}>
      {/* <Image resizeMode="center"
        source={require('./image/User.png')}
        style={{justifyContent:'center',alignItems:'center',
        width: 40,height: 40}}
      /> */}
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

    return <View style={{borderBottomWidth: 1, margin:10, flexDirection:'row'}}>
    {/* <View style={{ alignItems:'center', justifyContent:'center',
    flexDirection:'column'}}>
      <Image resizeMode="center"
        source={require('./image/Password.png')}
        style={{justifyContent:'center',alignItems:'center',
        width: 40,height: 40}}
      />
    </View> */}
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}>
      <TextInput secureTextEntry={this.state.hide} placeholder={this.props.ph}/>
    </View>
    {/* <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
      <TouchableOpacity onPress={this.clicked} 
        // underlayColor="lightgray"
        >
          <Image resizeMode="center"
            source={require('./image/EyeWhenClick.png')}
            style={{justifyContent:'center',alignItems:'center',
            width: 40,height: 40}}
          />
      </TouchableOpacity>
    </View> */}
    
    {/* <Text> {this.state.eye} </Text> */}
    </View>;
  }
};
const LoginButton = ( {navigation} ) => {
    return (
      <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
          <Button style={{backgroundColor:'#009688'}} onPress = {() => navigation.navigate("MainPage")}>
          <Text style={{justifyContent:'center'}} >
            เข้าสู่ระบบ
          </Text>
          </Button>
      </View>
    );
  };
class ForgotPassword extends Component {
  clicked(){


  }

  render() {
    return <View style={{marginLeft: '70%', flexDirection:'column' ,justifyContent:'flex-end' ,alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Text style={{fontSize:10,textDecorationLine: 'underline',color:'skyblue'}}> ลืมรหัสผ่าน? </Text>
    </TouchableOpacity>
    </View>;
  }
};
const CreateAccount = ( {navigation} ) => {
    return (<View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
      <Text style={{fontSize:13,textDecorationLine: 'underline'}}> สร้างบัญชีผู้ใช้ </Text>
    </TouchableOpacity>
    </View>);
};
class FacebookLogin extends Component {
  clicked(){


  }

  render() {
    return <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Image resizeMode="center"
            source={require('./image/loginF.png')}
            style={{justifyContent:'center',alignItems:'center',
            width:200,height:40}}
          />
    </TouchableOpacity>
    </View>;
  }
};
class GoogleLogin extends Component {
  clicked(){


  }

  render() {
    return <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={this.clicked}>
      <Image resizeMode="center"
            source={require('./image/loginG.png')}
            style={{justifyContent:'center',alignItems:'center',
            width:200,height:40}}
          />
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
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    flex: 0.2,
  },
  roomBox:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    width: 250
  }
});

