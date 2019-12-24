
import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import {RecentIcon,HomeIcon,FavoriteIcon,TypeIcon,RoomBanana,RoomPig,SearchButton} from './MainPage'
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
               <View style={{flex:1}}>
                 <SearchButton navigation={this.props.navigation}/>
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
          <RoomBanana navigation={this.props.navigation} />
          <RoomPig navigation={this.props.navigation} />
          <View style={{height:20}}/>

        </ScrollView>
      </View>
      </Drawer>
    );
  }
};


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

