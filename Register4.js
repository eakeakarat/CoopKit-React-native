
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

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView style={{flex: 1,flexDirection: 'column',}}>
        <View style={{flex: 0.1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
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
        
        <View style={{marginTop: 30,flex: 0.8,flexDirection: 'column'}} >
          <View style={{marginLeft: '10%',marginRight:'10%', height:200,borderWidth: 2}}>
            <View style={{height: '80%' ,backgroundColor: 'lightgrey',justifyContent:'center'
            ,alignItems:'center',borderBottomWidth: 2}} >
              <Image style={{alignContent:'center'}} 
              source={require('./image/plus.png')}
              resizeMode='center'
              />
            </View>
            <View style={{ height:'20%' , justifyContent:'center' }}>
            <Text> เพิ่มูปบัตรประชาชน </Text>
            </View>
          </View>
          <View style={{marginTop: 110,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel navigation={this.props.navigation}/>
            <NextButton navigation={this.props.navigation} />
          </View>
        </View>

      </ScrollView>
    );
  }
}

  
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
      <Button onPress={() => navigation.navigate('Register1')} >
        เสร็จสิ้น
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },center: {
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
 },peopleButton: {
   marginTop: 30,
   marginLeft: 10,
   marginRight: 10,
   flex: 1,
   borderWidth: 2,
   height: 50,
   alignItems: 'center',
   justifyContent: 'center',
 }
});

