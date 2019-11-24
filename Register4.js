
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



// export default class App extends Component {
class NextPage extends Component {
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
        
        <View style={{marginTop: 30,flex: 0.8,flexDirection: 'column'}} >
          
          <View style={{marginTop: 20,flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Cancel/>
            <NextButton/>
          </View>
        </View>
        
      </ScrollView>
    );
  }
}

  

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

