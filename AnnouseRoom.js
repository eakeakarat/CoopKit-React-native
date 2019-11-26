/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

export default class RecommendPage extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor: '#FAFAFA'}}>

        <View style={{flexDirection:'row',height:80,backgroundColor: '#1D7480'}}>
      
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:25,marginLeft:25}}>บ้านขายกล้วย</Text>
          
          <TouchableOpacity>
            <Image style={{width:30,height:30,marginTop:25,marginLeft:65}} source={require('./iconButton/Search.png')}/>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row',height:50,backgroundColor: '#1D7480'}}>
          
          <RecentIcon/>
          <TypeIcon/>
        </View>

        <ScrollView style={{flexDirection:'column',backgroundColor: '#FAFAFA'}}>
          <View style={{height:80,marginTop:15,backgroundColor:'white'}}>
            <Text style={{color:'red',fontSize:16,fontWeight:'400',marginLeft:10,marginTop:5}}>ประกาศสำหรับลูกค้าที่ต้องการซื้อของ</Text>
            <Text style={{fontSize:11,marginLeft:10,marginTop:5}}>ท่านสามารถกดซื้อได้ที่หน้า 'สหกรณ์' ถ้าทางเราได้รับคำสั่งซื้อแล้วทางเราจะแจ้งกลับท่านไปทางข้อความ</Text>
          </View>
          
          <View style={{height:80,marginTop:15,backgroundColor:'white'}}>
            <Text style={{color:'red',fontSize:16,fontWeight:'400',marginLeft:10,marginTop:5}}>ประกาศสำหรับลูกค้าที่ต้องการซื้อของ</Text>
            <Text style={{fontSize:11,marginLeft:10,marginTop:5}}>ตอนนี้กล้วยหอมของเราไม่เพียงพอต่อการขาย แต่ไม่ต้องห่วงพวกเรากำลังพยายามปลูกให้มีของมาตอบสนองความต้องการของพวกท่านให้ได้เร็วที่สุด</Text>
          </View>

          <View style={{height:80,marginTop:15,backgroundColor:'white'}}>
            <Text style={{color:'red',fontSize:16,fontWeight:'400',marginLeft:10,marginTop:5}}>ประกาศสำหรับสมาชิกสหกรณ์</Text>
            <Text style={{fontSize:11,marginLeft:10,marginTop:5}}>เกษตรกรท่านใดสนใจเข้าร่วมสหกรณ์ของเรา สมัครเข้ามาได้เลย</Text>
          </View>
        </ScrollView>
        
        
        
        
        


      </View>
      
      
    );
  }
};

class RecentIcon extends Component {
  constructor (props){
    super(props);
  }

  render(){
    return <View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity>
              <View style={{flexDirection:'column',
                            width:200,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  สหกรณ์
                </Text>
              </View>
            </TouchableOpacity>
           </View>
  }
}

class TypeIcon extends Component {
  constructor (props){
    super(props);
  }
  render(){
    return <View style={{borderBottomWidth:5,
                         borderBottomColor:'#FFFF8D',
                         flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity>
              <View style={{flexDirection:'column',
                            width:200,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  ประกาศ
                </Text>
              </View>
            </TouchableOpacity>
           </View>
  }
}

const styles = StyleSheet.create({

  button: {

  },
  
  box: {
    backgroundColor: '#BDBDBD',
    width: 310,
    height: 210,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10 ,
    marginLeft: 25 ,
    
    
  },
});

