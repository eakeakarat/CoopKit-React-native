
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

        <View style={{marginTop: 30,flex: 0.8,flexDirection: 'column'}} >
          <NormalPeople/>
          <FarmerPeople/>
          
          <View style={{marginTop: 20,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel navigation={this.props.navigation}/>
            <NextButton navigation={this.props.navigation}/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}




class NormalPeople extends Component {
  render() {
    return <View style={Styles.peopleButton}>
    <Text >ผู้ใช้ทั่วไป</Text>
    <Text style={{fontSize: 8 ,color: 'red'}} > *ใช้ได้เฉพาะฟีเจอร์ทั่วไป ไม่สามารถสร้างห้องได้</Text>
    </View>;
  }
};
class FarmerPeople extends Component {
  render() {
    return <View style={Styles.peopleButton}>
    <Text >เกษตรกร</Text>
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
      <Button onPress={() => navigation.navigate('Register4')} >
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

