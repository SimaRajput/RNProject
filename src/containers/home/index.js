import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { AuthStyles } from '../../styles';
import { Button } from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import { logoutSuccess } from '../../actions/user-actions-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
  },
  rowStyle: { padding: Constants.BaseStyle.PADDING },
  textStyle: { ...Constants.Fonts.regular },
});

class Home extends React.Component {


  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }



  render() {
    const { movies, userDetails } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={movies}
          renderItem={({
            item: {
              title, releaseYear,
            },
          }) => (
            <View style={styles.rowStyle}>
              <Text style={styles.textStyle}>{title}</Text>
              <Text style={styles.textStyle}>
                {`Release Year: ${releaseYear}`}
              </Text>

            </View>
          )}
        />
      </View>
    );
  }
}

Home.propTypes = {
  getMovies: func.isRequired,
  movies: arrayOf(
    shape({
      releaseYear: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
};

ReactMixin(Home.prototype, TimerMixin);

const mapStateToProps = ({ user: { movies } }) => ({ movies });

export default connect(
  mapStateToProps,
  { getMovies: userActions.getMovies },
)(Home);




// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import CountryView from './screens/country/CountryView';
// import SplashScreen from './screens/splash/splashScreen';
// import Home from '../codebase/screens/dashBoard';
// import Menu from '../codebase/screens/menu';
// import VisualliserHome from './screens/visualliser';
// import ScanQr from './screens/scanQr';
// import Configurator from './screens/configurator';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Image } from 'react-native';
// import { vh, vw } from './constants/Dimension/index';
// import CarModel from './screens/Car/carModel';
// import { createStackNavigator } from '@react-navigation/stack';


// const AuthStack = createStackNavigator();

// function AuthStackScreen() {
//   return (
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
//       <AuthStack.Screen name="CountryScreen" component={CountryView} />
//     </AuthStack.Navigator>
//   );
// }


// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={Home} />
//     </HomeStack.Navigator>
//   );
// }

// const VisualliserStack = createStackNavigator();

// function VisualliserStackScreen() {
//   return (
//     <VisualliserStack.Navigator>
//       <VisualliserStack.Screen name="VisualliserHome" component={VisualliserHome} />
//       <VisualliserStack.Screen name="CarModel" component={CarModel} />
//     </VisualliserStack.Navigator>
//   );
// }

// const ConfiguratorStack = createStackNavigator();

// function ConfiguratorScreen() {
//   return (
//     <ConfiguratorStack.Navigator>
//       <ConfiguratorStack.Screen name="Configurator" component={Configurator} />
//     </ConfiguratorStack.Navigator>
//   );
// }

// const MenuStack = createStackNavigator();

// function MenuStackScreen() {
//   return (
//     <MenuStack.Navigator>
//       <MenuStack.Screen name="Menu" component={Menu} />
//     </MenuStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator(

// );

// function MyTabs() {
//   return (
//     <NavigationContainer >
//       <Tab.Navigator
//         tabBarOptions={{

//           style: {
//             backgroundColor: '#333333',
//             height: vh(50)

//           }
//         }}
//       >

//         <Tab.Screen name="Home" component={HomeStackScreen}
//           options={{

//             tabBarLabel: '',
//             tabBarIcon: ({ focused, color, size }) => (
//               <Image resizeMode='cover' source={
//                 focused
//                   ? null
//                   : require('../codebase/resources/images/home.png')
//               } style={{
//                 width: vw(15),
//                 height: size,



//               }}
//               />


//             )


//           }}
//         />
//         <Tab.Screen name="VisualliserHome" component={VisualliserStackScreen}
//           options={{
//             tabBarLabel: '',

//             tabBarIcon: ({ focused, color, size }) => (
//               <Image resizeMode='contain' source={
//                 focused
//                   ? null
//                   : require('../codebase/resources/images/visualiser.png')
//               } style={{
//                 width: vw(30),
//                 height: vh(30),

//               }}
//               />


//             )

//           }} />
//         <Tab.Screen name="Configurator" component={ConfiguratorScreen}
//           options={{

//             tabBarLabel: '',
//             tabBarIcon: ({ focused, color, size }) => (
//               <Image resizeMode='cover' source={
//                 focused
//                   ? null
//                   : require('../codebase/resources/images/bentley_logo.png')
//               } style={{
//                 width: vw(25),
//                 height: vh(20),



//               }}
//               />


//             )

//           }}
//         />
//         {/* <Tab.Screen name="ScanQr" component={ScanQr} 
//        options={{
//         tabBarLabel: '',
//         tabBarIcon: ({focused, color, size}) => (
//           <Image source={
//             focused
//               ? null
//               : require('../codebase/resources/images/scan_qr.png')
//           } style={{
//             width: size,
//             height: size,
          
//           }}
//           />
            
              
//         )
        
//       }}/> */}
//         <Tab.Screen name="Menu" component={MenuStackScreen}
//           options={{
//             tabBarLabel: '',
//             tabBarIcon: ({ focused, color, size }) => (
//               <Image resizeMode='contain' source={
//                 focused
//                   ? null
//                   : require('../codebase/resources/images/menu.png')
//               } style={{
//                 width: vw(30),
//                 height: vh(30),

//               }}
//               />


//             ),
//             tabBarVisible: false,


//           }}
//         />

//       </Tab.Navigator>
//     </NavigationContainer>

//   );
// }

// // Keep adding screens on AuthStack


// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Auth: AuthStackScreen,
//       Home: MyTabs

//     },
//     {
//       initialRouteName: 'Auth',
//     }
//   )
// );