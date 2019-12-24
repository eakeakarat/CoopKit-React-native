

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
          
          {/* <TouchableOpacity>
            <Image style={{width:30,height:30,marginTop:25,marginLeft:65}} source={require('./iconButton/Search.png')}/>
          </TouchableOpacity> */}
        </View>
        
        <View style={{flexDirection: 'row',height:50,backgroundColor: '#1D7480'}}>
          
          <PageButton navigation={this.props.navigation} color={'#FFFF8D'} />
          <AnnousePage navigation={this.props.navigation} color={'#1D7480'}/>

        </View>

        <ScrollView style={{flexDirection:'column',backgroundColor: '#FAFAFA'}}>
         <View style={{width:300,height:250,flexDirection:'column',marginLeft:30,marginTop:10,backgroundColor:'white'}}>
          <View style={{height:200,width:300,backgroundColor:'gray'}}>
            <Image style={{height:200,width:300}} source={require('./iconButton/bananaRoom.jpg')}/>
          </View>
          <Text style={{fontSize:12,marginLeft:5}}>กล้วยถูก กล้วยดี ต้องกล้วยตานี ปลายหวีเหี่ยว หิ้วหวีเหี่ยวไป หิ้วหวีเหี่ยวมา</Text>

          </View>
            
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <BananaHom/>
            </TouchableOpacity>
            <TouchableOpacity>
              <BananaTanee/>
            </TouchableOpacity>
            <TouchableOpacity>
              <BananaNamwa/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export const BananaHom = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/Bananahom.jpg')}/>
            </View>
            <Text>กล้วยหอม 10 บาท/หวี</Text>
           </View>
}
export const BananaTanee = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/Tanee.jpg')}/>
            </View>
            <Text>กล้วยตานี 20 บาท/หวี</Text>
           </View>
}
export const BananaNamwa = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/Namwa.jpg')}/>
            </View>
            <Text>กล้วยน้ำว้า 25 บาท/หวี</Text>
           </View>
}

export const PageButton = ({ navigation }) => {
    return (<View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('RoomBanana')}>
              <View style={{borderBottomWidth:5,
                            borderBottomColor: '#FFFF8D' ,
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
                            borderBottomColor: '#1D7480' ,
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


