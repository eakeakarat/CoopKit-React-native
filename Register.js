
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';

export default class Register extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (

      <ScrollView style={{flex: 1,flexDirection: 'column',}}>
        <View style={{flex: 0.1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBarInactive}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBarInactive}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBarInactive}></View>
            <View style={Styles.gap}></View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={Styles.gap}></View>
            <ButtonText text={"สร้างบัญชีผู้ใช้"}/>
            <View style={Styles.gap}></View>
            <ButtonText text={"ข้อมูลส่วนตัว"}/>
            <View style={Styles.gap}></View>
            <ButtonText text={"เลือกประเภทผู้ใช้"}/>
            <View style={Styles.gap}></View>
            <ButtonText text={"รูปบัตรประชาชน"}/>
            <View style={Styles.gap}></View>
          </View> 
        </View>
        {/* <View style={{flex: 0.1, marginTop: 20,borderWidth: 1,flexDirection: 'row'}} > */}
          {/* <Text style={Styles.center}> 1. </Text> */}

        {/* </View> */}

        <View style={{flex: 0.8,flexDirection: 'column'}} >
          <UserInput ph='อีเมล์' ph1='ยืนยันอีเมล์'/>
          <PasswordInput ph='รหัสผ่าน'/>
          <Text>    *รหัสผ่านไม่เกิน 9 ตัวอักษร </Text>
          <Text>    *ต้องการสัญลักษณ์อย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <Text>    *ต้องการอักษรพิเศษอย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <Text>    *ต้องการตัวเลขอย่างน้อย 1 ตัวในรหัสผ่าน</Text>
          <PasswordInput ph="ยืนยันรหัสผ่าน"/>
          <View style={{marginTop:30 ,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel navigation={this.props.navigation}/>
            <NextButton navigation={this.props.navigation}/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}

<UserInput ph="email"/>

class UserInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {
    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph}/>
            </View>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph1}/>
            </View>
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
    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput secureTextEntry={this.state.hide} placeholder={this.props.ph} value='abc'/>
              <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                <TouchableOpacity onPress={this.clicked} >
                  <Image resizeMode="center"
                    source={require('./image/EyeWhenClick.png')}
                    style={{justifyContent:'center',alignItems:'center',
                    width: 40,height: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>;

  }
};

const ButtonText = ({text}) => {
  return (<View style={Styles.center}>
  <Text style={{fontSize:8}} >{text}</Text>
  </View>
  );
}
const NextButton = ({ navigation }) => {
  return (
    <View style={{justifyContent:'center',alignItems:'flex-end',
    marginRight:20}}>
      <Button onPress={() => navigation.navigate('Register2')} >
        ต่อไป
      </Button>
    </View>
  );
}
const Cancel = ({ navigation }) => {
  return (<View style={{justifyContent:'center',alignItems:'center'}}>
  <Button >
    <Text style={{fontSize:10}}> ยกเลิก </Text>
  </Button>
  </View>
);
}

const Styles = StyleSheet.create({
  center: {
    justifyContent:'center',
    alignItems:'center',
    width: '20%'
  },
  inputBar:{
    borderBottomWidth: 1,
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    height: 40
  },
  progressBar: {
   height: 20,
   width: '20%',
   backgroundColor: 'green',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },progressBarInactive: {
   height: 20,
   width: '20%',
   backgroundColor: 'grey',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },gap: {
    width: '4%'
 }
});

