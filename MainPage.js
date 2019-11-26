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

import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
import { IconFill } from '@ant-design/icons-react-native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',   
  },
});

const style = {
  paddingVertical: 40,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  backgroundColor: '#ddd',
};

export default class MainPage extends Component {
  render(){
    return (
      <DrawerIcon/>

    );
  }
}


class DrawerIcon extends Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('Drawer Open? : ', isOpen.toString());
    };
  }
  render() {

    const sidebar = (
      <ScrollView style={[styles.container]}>
        <View style={{height:150,backgroundColor:'gray',justifyContent:'flex-end'}}>
          <Button style={{width:100,height:30,marginBottom:20,marginLeft:20}}>
            <Text style={{fontSize:11}}>
              เข้าสู่ระบบ
            </Text>
          </Button>
        </View>
        <Button style={{justifyContent:'flex-start',flexDirection:'row',marginTop:5}}>
          <Image style={{width:25,height:25,justifyContent:'flex-start'}}source={require('./iconButton/Profile.png')}/>
          <Text style={{justifyContent:'center'}}>
            ข้อมูลส่วนตัว
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:15}}>
          <Image style={{width:30,height:25,justifyContent:'flex-start'}}source={require('./iconButton/Noti.png')}/>
          <Text>
            แจ้งเตือน
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:15}}>
        <Image style={{width:20,height:20,justifyContent:'flex-start'}}source={require('./iconButton/setting.png')}/>
          <Text>
            ตั้งค่า
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:180}}>
          <Image style={{width:20,height:20,justifyContent:'flex-start'}}source={require('./iconButton/Logout.png')}/>
          <Text style={{color:'red'}}>
            ออกจากระบบ
          </Text>
        </Button>
        
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
        <View style={{ flex: 1}}>
          <View style={{flex:1,flexDirection:'column',backgroundColor: '#FAFAFA'}}>
            <View style={{flexDirection:'row',height:80,backgroundColor: '#1D7480'}}>
             <TouchableOpacity style={{width:20,marginTop:30,marginLeft:20}}  onPress={() => this.drawer && this.drawer.openDrawer()}>
              <Image style={{width:20,height:20}} source={require('./iconButton/hamburger.png')}/>
             </TouchableOpacity>
      
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:25,marginLeft:25}}>Co-Operative Kit</Text>
          
          <TouchableOpacity>
            <Image style={{width:30,height:30,marginTop:25,marginLeft:65}} source={require('./iconButton/Search.png')}/>
          </TouchableOpacity>
        </View>
        
       

        
      </View>
          
        </View>
      </Drawer>
    );
  }
}


class RoomBanana extends Component {
  constructor (props){
    super(props);
  }
  render(){
    return  <View style={{width:310,height:310,alignItems:'center',marginTop:20,marginLeft:10,justifyContent:'space-between'}}>
              <TouchableOpacity>
                <View style={{backgroundColor: '#BDBDBD',
                              flexDirection:'column',
                              width: 310,
                              height: 310,
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                              marginTop: 10 ,
                              marginLeft: 25 }}>
                    <View style={{height:100,width:310,backgroundColor:'white'}}>
                      <Text style={{marginLeft:15,marginTop:15,fontSize:20,fontWeight:'bold'}}> 
                        บ้านขายกล้วย 
                      </Text>
                      <Text style={{marginTop:5,marginLeft:15,fontSize:12}}>
                        กล้วยถูก กล้วยดี ต้องกล้วยตานีปลายหวีเหี่ยว......
                      </Text>
                      <Text style={{justifyContent:'flex-end',marginTop:10,marginLeft:15,color:'green'}}>
                        ผลไม้
                      </Text>
                    </View>

                </View>
              </TouchableOpacity>
            </View>

  }
}

class RoomPig extends Component {
  constructor (props){
    super(props);
  }
  render(){
    return  <View style={{width:310,height:310,alignItems:'center',marginTop:20,marginLeft:10,justifyContent:'space-between'}}>
              <TouchableOpacity>
                <View style={{backgroundColor: '#BDBDBD',
                              flexDirection:'column',
                              width: 310,
                              height: 310,
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                              marginTop: 10 ,
                              marginLeft: 25 }}>
                    <View style={{height:100,width:310,backgroundColor:'white'}}>
                      <Text style={{marginLeft:15,marginTop:15,fontSize:20,fontWeight:'bold'}}> 
                        คนเลี้ยงหมู 
                      </Text>
                      <Text style={{marginTop:5,marginLeft:15,fontSize:12}}>
                        อู๊ดๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ.....
                      </Text>
                      <Text style={{justifyContent:'flex-end',marginTop:10,marginLeft:15,color:'green'}}>
                        เนื้อสัตว์
                      </Text>
                    </View>

                </View>
              </TouchableOpacity>
            </View>

  }
}

class HomeIcon extends Component {
  constructor (props){
    super(props);
  }
  render(){
    return <View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity>
              <View style={{borderBottomWidth:5,
                            borderBottomColor:'#FFFF8D',
                            flexDirection:'column',
                            width:125,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  หน้าแรก
                </Text>
              </View>
            </TouchableOpacity>
           </View>
  }
}



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
                            width:125,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  ที่เข้าล่าสุด
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
    return <View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity>
              <View style={{flexDirection:'column',
                            width:125,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  หมวดหมู่
                </Text>
              </View>
            </TouchableOpacity>
           </View>
  }
}

class FavoriteIcon extends Component {
  constructor (props){
    super(props);
  }

  render(){
    return <View style={{flexDirection:'column',
                         flex:1,
                         alignItems:'center'}}>
            <TouchableOpacity>
              <View style={{flexDirection:'column',
                            width:125,
                            height:50,
                            alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:5}}>
                  ที่ชื่นชอบ
                </Text>
              </View>
            </TouchableOpacity>
           </View>
  }
}


