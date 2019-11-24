
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

      <ScrollView style={{flex: 1,flexDirection: 'column',}}>
        <View style={{flex: 0.1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row',padding: 8}}>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBar}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBarInactive}></View>
            <View style={Styles.gap}></View>
            <View style={Styles.progressBarInactive}></View>
            <View style={Styles.gap}></View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={Styles.gap}></View>
            <ButtonText text="สร้างบัญชีผู้ใช้"/>
            <View style={Styles.gap}></View>
            <ButtonText text="ข้อมูลส่วนตัว"/>
            <View style={Styles.gap}></View>
            <ButtonText text="เลือกประเภทผู้ใช้"/>
            <View style={Styles.gap}></View>
            <ButtonText text="รูปบัตรประชาชน"/>
            <View style={Styles.gap}></View>
          </View> 
        </View>
        {/* <View style={{flex: 0.1, marginTop: 20,borderWidth: 1,flexDirection: 'row'}} > */}
          {/* <Text style={Styles.center}> 1. </Text> */}

        {/* </View> */}

        <View style={{marginTop: 30,flex: 0.8,flexDirection: 'column'}} >
          <HeadText text="ชื่อ-นามสกุล"/>
          <NameInput ph='ชื่อ-นามสกุล'/>

          <HeadText text="เบอร์โทรศัพท์"/>
          <PhoneInput ph='เบอร์โทรศัพท์'/>

          <HeadText text="เลขบัตรประชาชน"/>
          <IdInput ph='เลขบัตรประชาชน'/>

          <HeadText text="ที่อยู่"/>
          <AddrInput ph='ที่อยู่'/>
          <View style={{marginTop: 20,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel/>
            <NextButton/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}


class NameInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph}/>
            </View>
          </View>;
  }
};
class PhoneInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph}/>
            </View>
          </View>;
  }
};
class IdInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph}/>
            </View>
          </View>;
  }
};
class AddrInput extends Component {
  constructor(props){
    super(props);    
  }

  render() {

    return <View style={{flex:1, margin:10, flexDirection:'column'}}>
            <View style={Styles.inputBar}>
              <TextInput placeholder={this.props.ph}/>
            </View>
          </View>;
  }
};




class HeadText extends Component {
  render() {
    return <View style={{marginLeft: 15}}>
    <Text style={{fontSize:8}} >{this.props.text}</Text>
    </View>;
  }
};
class ButtonText extends Component {
  render() {
    return <View style={Styles.center}>
    <Text style={{fontSize:8}} >{this.props.text}</Text>
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

