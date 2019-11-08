
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
        <View style={{flex: 0.1, marginTop: 20,borderWidth: 1,flexDirection: 'row'}} >
          {/* <Text style={Styles.center}> 1. </Text> */}
          <ButtonText text="1.สร้างบัญชีผู้ใช้"/>
          <ButtonText text="2.ข้อมูลส่วนตัว"/>
          <ButtonText text="3.เลือกประเภทผู้ใช้"/>
          <ButtonText text="4.ถ่ายรูปบัตรประชาชน"/>
        </View>

        <View style={{flex: 0.8,flexDirection: 'column'}} >
          <InputText ph="อีเมล์"/>
          <InputText ph="ยืนยันอีเมล์"/>
          <PasswordInput ph="รหัสผ่าน"/>
          <Text>    *รหัสผ่านไม่เกิน 9 ตัวอักษร </Text>
          <Text>    *ต้องการสัญลักษณ์อย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <Text>    *ต้องการอักษรพิเศษอย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <Text>    *ต้องการตัวเลขอย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <PasswordInput ph="ยืนยันรหัสผ่าน"/>
          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel/>
            <NextButton/>
          </View>
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
    <TextInput secureTextEntry={this.state.hide} placeholder={this.props.ph} value='abc'/>
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
class NextButton extends Component {
  constructor(props){
    super(props)
  }

  clicked(){

  }
  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'flex-end',
      marginRight:20}}>
        <TouchableOpacity onPress={this.clicked} 
        // underlayColor="lightgray"
        >
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

