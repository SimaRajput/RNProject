
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Constants from '../constants';
import Home from './home';
import Messages from './messages';
import More from './more';
import Profile from './profile';
// import CustomBottomBar from '../components/common/custome-tab-bar'

const config= {
  tabBarOptions:{
  showLabel: false,
},
}

const styles = StyleSheet.create({
  logo: {
    height: 25,
    width: 25,
    tintColor:'#33d6ff'
  },
  lableStyle :{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ccf5ff',
    height:35,
    paddingHorizontal:15,
    borderRadius:8,
  },
  textStyle :{
    textAlign:'center',
    left:5,
    ...Constants.Fonts.smallBold
  }
});


const routes ={
   Home: {
    screen: Home,
     navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ? 
        <View style={[styles.lableStyle,{left:12}]}>
          <Image
          source={Constants.Images.home}
          style={styles.logo}
          resizeMode="contain"
        />
          <Text style={styles.textStyle}>Dashboard</Text>
        </View> :  <Image
          source={Constants.Images.home}
          style={styles.logo}
          resizeMode="contain"
        />
       ),
     }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
        <View style={styles.lableStyle}>
        <Image
          source={Constants.Images.profile}
          style={styles.logo}
          resizeMode="contain"
        />
         <Text style={styles.textStyle}>Profile</Text>
        </View>:  <Image
          source={Constants.Images.profile}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
        <View style={styles.lableStyle}>
        <Image
          source={Constants.Images.message}
          style={styles.logo}
          resizeMode="contain"
        />
         <Text style={styles.textStyle}>Messages</Text>
        </View> : <Image
          source={Constants.Images.message}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ? 
        <View style={styles.lableStyle}>
        <Image
          source={Constants.Images.more}
          style={styles.logo}
          resizeMode="contain"
        />
         <Text style={styles.textStyle}>More</Text>
        </View> : <Image
          source={Constants.Images.more}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
}

const Dashboard = createBottomTabNavigator(routes,config);

export default createAppContainer(Dashboard);
