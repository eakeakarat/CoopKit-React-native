
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

export default class AnnouseRoom extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor: '#FAFAFA'}}>
        <View style={{flexDirection:'row',height:80,backgroundColor: '#1D7480'}}>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:25,marginLeft:25}}>บ้านขายกล้วย</Text>
        </View>

        <View style={{flexDirection: 'row',height:50,backgroundColor: '#1D7480'}}>          
          <PageButton navigation={this.props.navigation} color='#1D7480'/>
          <AnnousePage navigation={this.props.navigation} color='#FFFF8D' />
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

export const PageButton = ({ navigation }) => {
  return (<View style={{flexDirection:'column',
                       flex:1,
                       alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('RoomPage')}>
            <View style={{borderBottomWidth:5,
                          borderBottomColor: '#1D7480' ,
                          flexDirection:'column',
                          width:200,
                          height:50,
                          alignItems:'center'}}>
              <Text style={{fontSize:14,marginTop:5}}>
                สหกรณ์
              </Text>
            </View>
          </TouchableOpacity>
         </View>
    );
  }
  
  export const AnnousePage = ({ navigation }) => {
    return (<View style={{flexDirection:'column',
    flex:1,
    alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('AnnouseBanana')}>
            <View style={{borderBottomWidth:5,
                          borderBottomColor: '#FFFF8D' ,
                          flexDirection:'column',
                          width:200,
                          height:50,
                          alignItems:'center'}}>
              <Text style={{fontSize:14,marginTop:5}}>
                ประกาศ
              </Text>
            </View>
          </TouchableOpacity>
         </View>);
}
