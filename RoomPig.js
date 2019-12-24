

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
      
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:25,marginLeft:25}}>คนเลี้ยงหมู</Text>
          
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
            <Image style={{height:200,width:300}} source={require('./iconButton/PigRoom.jpg')}/>
          </View>
          <Text style={{fontSize:12,marginLeft:5}}>อู๊ดๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ.....</Text>

          </View>
            
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <PigNeck/>
            </TouchableOpacity>
            <TouchableOpacity>
              <PigRib/>
            </TouchableOpacity>
            <TouchableOpacity>
              <PigTenderloin/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export const PigNeck = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/neck.jpg')}/>
            </View>
            <Text>สันคอหมู 145 บาท/กก.</Text>
           </View>
}
export const PigRib = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/rib.jpg')}/>
            </View>
            <Text>ซี่โครงหมู 135 บาท/กก.</Text>
           </View>
}
export const PigTenderloin = () => {
    return <View style={{height:120,width:80,marginTop:15,marginLeft:30,backgroundColor:'white'}}>
            <View style={{height:80,width:80}}>
              <Image style={{height:80,width:80}} source={require('./iconButton/tenderloin.jpg')}/>
            </View>
            <Text>สันในหมู 156 บาท/กก.</Text>
           </View>
}

export const PageButton = ({ navigation }) => {
    return (<View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('RoomPig')}>
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
            <TouchableOpacity onPress={() => navigation.navigate('AnnousePig')}>
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


