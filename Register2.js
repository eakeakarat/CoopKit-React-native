
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
import {Cancel} from './Register.js';

export default class Register2 extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (

      <ScrollView style={{flex: 1,flexDirection: 'column',}}>
        <View style={{marginTop:20, flex: 0.1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBar}></View>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBar}></View>
            <View style={RegisterStyles.gap}></View>
            <View style={RegisterStyles.progressBarInactive}></View>
            <View style={RegisterStyles.gap}></View>
            {/* <View style={RegisterStyles.progressBarInactive}></View>
            <View style={RegisterStyles.gap}></View> */}
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"สร้างบัญชีผู้ใช้"}/>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"ข้อมูลส่วนตัว"}/>
            <View style={RegisterStyles.gap}></View>
            <ButtonText text={"เลือกประเภทผู้ใช้"}/>
            <View style={RegisterStyles.gap}></View>
            {/* <ButtonText text={"รูปบัตรประชาชน"}/>
            <View style={RegisterStyles.gap}></View> */}
          </View> 
        </View>
        {/* <View style={{flex: 0.1, marginTop: 20,borderWidth: 1,flexDirection: 'row'}} > */}
          {/* <Text style={RegisterStyles.center}> 1. </Text> */}

        {/* </View> */}

        <View style={{marginTop: 50,flex: 0.8,flexDirection: 'column'}} >
          <WhiteSpace/>
          <HeadText text={"ชื่อ-นามสกุล"}/>
          <NameInput ph={'ชื่อ-นามสกุล'}/>
          <WhiteSpace/>
          <WhiteSpace/>

          <HeadText text={"เบอร์โทรศัพท์"}/>
          <PhoneInput ph={'เบอร์โทรศัพท์'}/>
          <WhiteSpace/>
          <WhiteSpace/>

          <HeadText text={"เลขบัตรประชาชน"}/>
          <IdInput ph={'เลขบัตรประชาชน'}/>
          <WhiteSpace/>
          <WhiteSpace/>

          <HeadText text={"ที่อยู่"}/>
          <AddrInput ph={'ที่อยู่'}/>
          <View style={{marginTop: 90,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel navigation={this.props.navigation}/>
            <NextButton navigation={this.props.navigation}/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}


const NameInput = ({ph}) => {
    return (<View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={RegisterStyles.inputBar}>
              <TextInput placeholder={ph}/>
            </View>
    </View>
    );
}
const PhoneInput = ({ph}) => {
    return (<View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={RegisterStyles.inputBar}>
              <TextInput placeholder={ph}/>
            </View>
          </View>
          );
}
const IdInput = ({ph}) => {
    return (<View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={RegisterStyles.inputBar}>
              <TextInput placeholder={ph}/>
            </View>
          </View>
    );
}
const AddrInput = ({ph}) => {
    return (<View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={RegisterStyles.inputBar}>
              <TextInput placeholder={ph}/>
            </View>
    </View>
    );
  
}
const HeadText = ({text}) => {
    return (<View style={{marginLeft: 15}}>
    <Text style={{fontSize:8, fontWeight:'bold' }} >{text}</Text>
    </View>
    );
}
const ButtonText = ({text}) => {
  return (<View style={RegisterStyles.center}>
  <Text style={{fontSize:8}} >{text}</Text>
  </View>
  );
}
const NextButton = ({ navigation }) => {
  return (
    <View style={{justifyContent:'center',alignItems:'flex-end',
    marginRight:20}}>
      <Button style={{backgroundColor:'#009688'}}  onPress={() => navigation.navigate('Register3')} >
      <Text style={{color:'white'}} >
        ต่อไป
        </Text>
      </Button>
    </View>
  );
}

const RegisterStyles = StyleSheet.create({
  center: {
    justifyContent:'center',
    alignItems:'center',
    width: '28%'
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
   width: '28%',
   backgroundColor: 'green',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },progressBarInactive: {
   height: 20,
   width: '28%',
   backgroundColor: 'grey',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
 },gap: {
    width: '4%'
 }
});


