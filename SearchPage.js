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
  TouchableOpacity,
} from 'react-native';
import {RecentIcon,HomeIcon,FavoriteIcon,TypeIcon} from './MainPage'
import { Button, Drawer, List, WhiteSpace, SearchBar } from '@ant-design/react-native';

import SearchInput , { createFilter } from 'react-native-search-filter';
import Rooms from './rooms';

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

const KEYS_TO_FILTERS = ['name', 'description'];

export default class DrawerIcon extends Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('Drawer Open? : ', isOpen.toString());
    }
    this.state = {
      searchTerm: '',
    };
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const filteredRooms = Rooms.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
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
        <View style={{ flex: 1}}>
          <View style={{flex:1,flexDirection:'column',backgroundColor: '#FAFAFA'}}>
            <View style={{flexDirection:'row',height:80,backgroundColor: '#1D7480'}}>
             <TouchableOpacity  onPress={() => this.drawer && this.drawer.openDrawer()}>
              <Image style={{width:30,height:30,marginLeft:15,marginTop:20}} source={require('./iconButton/hamburger.png')}/>
             </TouchableOpacity>
      
             <View style={{flex:1,marginLeft:15,marginTop:20,flexDirection:'row'}}> 
               {/* <TouchableOpacity>
                <Image style={{width:30,height:30,marginTop:5}} source={require('./iconButton/Search.png')}/>
               </TouchableOpacity>      */}
               <View style={{flex:1}}>
                <SearchInput
                  onChangeText={(term) => { this.searchUpdated(term) }}
                  style={styles.searchInput}
                  placeholder="Search"
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

        <ScrollView style={{flexDirection:'column',marginTop:15,backgroundColor: '#FAFAFA'}}>
          {filteredRooms.map(room => {
            let roomNav = room.navi;
            return (
              // <TouchableOpacity onPress={() => Alert.alert(room.name ,room.description)} key={room.id}>
              <TouchableOpacity key={room.name} 
              onPress={() => this.props.navigation.navigate(roomNav) }>
                <View style={{borderBottomWidth: 0.5,borderColor: 'rgba(0,0,0,0.3)',padding: 10}}>
                  <Text style={{fontSize: 18,fontWeight:'bold'}} >{room.name}</Text>
                  <WhiteSpace/>
                  <Text style={{fontSize: 12,fontStyle:'italic',color:'rgba(0,0,0,0.5)'}} >{room.description}</Text>
                  {/* <Text>{roomNav}</Text> */}
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
        
        </View>
          
        </View>
      </Drawer>
    );
  }
}


