
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
import Home from './home/home';
import Messages from './messages';
import More from './more';
import Invester from './invester/invester';

const config = {
  tabBarOptions:{
  showLabel: false,
  style: { height: 65 },
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
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    height:38,
    paddingHorizontal:15,
    borderRadius:8,
  },
  textStyle :{
    textAlign:'center',
    left:5,
    ...Constants.Fonts.OpenSans.smallBold
  },
  iconStyle: {
   left:6
  }
});

const { home, invest, inbox, settings } = Constants.i18n.dashboard


const routes ={
   Home: {
    screen: Home,
     navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ? 
        <View style={[styles.lableStyle,{left:16}]}>
        <View style={styles.iconStyle}><Constants.Images.Dashboard/></View>
          <Text style={[styles.textStyle,{width:'120%'}]}>{home}</Text>
        </View> : <Constants.Images.Dashboard/>
       ),
     }),
  },
  Invester: {
    screen: Invester,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
        <View style={styles.lableStyle}>
          <Constants.Images.Invest/>
         <Text style={styles.textStyle}>{invest}</Text>
        </View>:  <Constants.Images.Invest/>
      ),
    }),
  },
  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ?
        <View style={styles.lableStyle}>
          <Constants.Images.Inbox/>
         <Text style={styles.textStyle}>{inbox}</Text>
        </View> :  <Constants.Images.Inbox/>
      ),
    }),
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        focused ? 
        <View style={[styles.lableStyle,{right:12}]}>
         <Constants.Images.Settings/>
         <Text style={styles.textStyle}>{settings}</Text>
        </View> :   <Constants.Images.Settings/>
      ),
    }),
  },
}

const Dashboard = createBottomTabNavigator(routes,config);

export default createAppContainer(Dashboard);
