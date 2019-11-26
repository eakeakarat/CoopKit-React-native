
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
import {RecentIcon,HomeIcon,FavoriteIcon,TypeIcon,RoomBanana,RoomPig} from './SearchPage'
import { Button, Drawer, List, WhiteSpace, SearchBar } from '@ant-design/react-native';

export default class RecentPage extends Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('Drawer Open? : ', isOpen.toString());
    };
    this.state = {
      value: '',
    };
    this.onChange = value => {
      this.setState({ value });
    };
    this.clear = () => {
      this.setState({ value: '' });
    };
  
  }
  render() {
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <View style={{height:150,backgroundColor:'gray',justifyContent:'flex-end'}}>
          <Button style={{width:100,height:30,marginBottom:20,marginLeft:20}} onPress={() => this.props.navigation.navigate('LoginPage')} >
            <Text style={{fontSize:11}}>
              เข้าสู่ระบบ
            </Text>
          </Button>
        </View>
        <Button style={{justifyContent:'flex-start',flexDirection:'row',marginTop:5}}>
          <Image style={{width:25,height:25,justifyContent:'flex-start'}}source={require('./iconButton/Profile.png')}/>
          <Text style={{justifyContent:'center'}} >
            ข้อมูลส่วนตัว
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:15}} >
          <Image style={{width:30,height:25,justifyContent:'flex-start'}}source={require('./iconButton/Noti.png')}/>
          <Text>
            แจ้งเตือน
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:15}} >
        <Image style={{width:20,height:20,justifyContent:'flex-start'}}source={require('./iconButton/setting.png')}/>
          <Text>
            ตั้งค่า
          </Text>
        </Button>
        <Button style={{alignItems:'flex-start',marginTop:180}} >
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
      <View style={{flex:1,flexDirection:'column',backgroundColor: '#FAFAFA'}}>

        <View style={{flexDirection:'row',height:80,backgroundColor: '#1D7480'}}>
          <TouchableOpacity onPress={() => this.drawer && this.drawer.openDrawer()}>
            <Image style={{width:30,height:30,marginLeft:15,marginTop:20}} source={require('./iconButton/hamburger.png')} />
          </TouchableOpacity>
      
          <View style={{flex:1,marginLeft:15,marginTop:20,flexDirection:'row'}}> 
               {/* <TouchableOpacity>
                <Image style={{width:30,height:30,marginTop:5}} source={require('./iconButton/Search.png')}/>
               </TouchableOpacity>      */}
               <View style={{flex:1}}>
                <SearchBar style={{ }}
                  value={this.state.value}
                  placeholder='ค้นหา'
                  onSubmit={value => Alert.alert(value)}
                  onCancel={this.clear}
                  onChange={this.onChange}
                  showCancelButton={false}
                  Style={{
                    textAlign: 'left'
                  }}

                  //  disabled={true}
                  />
              </View>
             </View>
        </View>
        
        <View style={{flexDirection: 'row',height:50,backgroundColor: '#1D7480'}}>
          <HomeIcon navigation={this.props.navigation}/>
          <FavoriteIcon navigation={this.props.navigation}/>
          <RecentIcon navigation={this.props.navigation}/>
          <TypeIcon navigation={this.props.navigation}/>
        </View>

        <ScrollView style={{flexDirection:'column',marginTop:5,backgroundColor: '#FAFAFA'}}>
          <Text style={{fontSize:20,marginLeft:20,marginTop:10}}>ภายในวันนี้</Text>
          <RoomBanana/>
          <RoomPig/>
          <View style={{height:20}}/>

        </ScrollView>
      </View>
      </Drawer>
    );
  }
};

// class RoomBanana extends Component {
//   constructor (props){
//     super(props);
//   }
//   render(){
//     return  <View style={{width:310,height:310,alignItems:'center',marginLeft:10,justifyContent:'space-between'}}>
//               <TouchableOpacity>
//                 <View style={{backgroundColor: '#BDBDBD',
//                               flexDirection:'column',
//                               width: 310,
//                               height: 310,
//                               justifyContent: 'flex-end',
//                               alignItems: 'center',
//                               marginTop: 10 ,
//                               marginLeft: 25 }}>
//                     <View style={{height:100,width:310,backgroundColor:'white'}}>
//                       <Text style={{marginLeft:15,marginTop:15,fontSize:20,fontWeight:'bold'}}> 
//                         บ้านขายกล้วย 
//                       </Text>
//                       <Text style={{marginTop:5,marginLeft:15,fontSize:12}}>
//                         กล้วยถูก กล้วยดี ต้องกล้วยตานีปลายหวีเหี่ยว......
//                       </Text>
//                       <Text style={{justifyContent:'flex-end',marginTop:10,marginLeft:15,color:'green'}}>
//                         ผลไม้
//                       </Text>
//                     </View>

//                 </View>
//               </TouchableOpacity>
//             </View>

//   }
// }

// class RoomPig extends Component {
//   constructor (props){
//     super(props);
//   }
//   render(){
//     return  <View style={{width:310,height:310,alignItems:'center',marginTop:20,marginLeft:10,justifyContent:'space-between'}}>
//               <TouchableOpacity>
//                 <View style={{backgroundColor: '#BDBDBD',
//                               flexDirection:'column',
//                               width: 310,
//                               height: 310,
//                               justifyContent: 'flex-end',
//                               alignItems: 'center',
//                               marginTop: 10 ,
//                               marginLeft: 25, }}>
//                     <View style={{height:100,width:310,backgroundColor:'white'}}>
//                       <Text style={{marginLeft:15,marginTop:15,fontSize:20,fontWeight:'bold'}}> 
//                         คนเลี้ยงหมู 
//                       </Text>
//                       <Text style={{marginTop:5,marginLeft:15,fontSize:12}}>
//                         อู๊ดๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ.....
//                       </Text>
//                       <Text style={{justifyContent:'flex-end',marginTop:10,marginLeft:15,color:'green'}}>
//                         เนื้อสัตว์
//                       </Text>
//                     </View>

//                 </View>
//               </TouchableOpacity>
//             </View>

//   }
// }




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

