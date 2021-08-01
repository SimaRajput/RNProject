import { ifIphoneX } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import Constants from '../constants';

const styles = {
  alignText: { textAlign: 'center' },
  buttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 7,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
  },
  logOutbuttonStyle: {
    backgroundColor: Constants.Colors.BUTTON_COLOR,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    alignSelf:'center',
    bottom:20
  },
  container: {
    backgroundColor: Constants.Colors.WHITE,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
  },
  description: {
    ...Constants.Fonts.regular,
    color: Constants.Colors.GRAY,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 70,
  },
  emailTextStyle: { color: Constants.Colors.BLACK },
  logoStyle: {
    alignSelf: 'center',
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 8,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    
  },
  navigationBarStyle: { ...ifIphoneX({ height: 64 }, { height: 44 }) },
  sepratorStyle: {
    ...Constants.Fonts.regularBold,
    color: Constants.Colors.GRAY,
    fontFamily: 'Avenir-Medium',
  },
  signupTextInputContainer: { marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5 },
  textDecorationLineStyle: {
    ...Constants.Fonts.OpenSans.regularBold,
    color: Constants.Colors.PRIMARY_COLOR,
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  extDecorationLineStyle: {
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.TEXT_COLOR2,
    textAlign: 'right',
    marginBottom:20
  },
  signupLineStyle: {
    color: Constants.Colors.PRIMARY_COLOR,
    textAlign: 'right',
    ...Constants.Fonts.OpenSans.regularBold,
  },
  textStyle: {
    ...Constants.Fonts.extraLargeBold,
    color: Constants.Colors.BLACK,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  },
  bottomViewStyle :{
    flexDirection:'row',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    justifyContent:'center'
  },
  label: {
    ...Constants.Fonts.OpenSans.largeHeaderBold,
    color: Constants.Colors.DARK_BLACK,
    textAlign: 'left',
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
  },
  getUpdate :{
    flexDirection:'row',
    alignItems:'center',
  },
  getUpdateText: {
    color:Constants.Colors.GRAY,
    ...Constants.Fonts.OpenSans.smallRegular,
    left:8
  },
  termsText: {
    color:Constants.Colors.TEXT_COLOR2,
    ...Constants.Fonts.OpenSans.smallRegular,
    left:8
  },
  loginTexthere: {
    position:'absolute',
    ...Constants.Fonts.OpenSans.mediumSemiBold,
    top:60,
    left:140
  },
  bubbleContainer: {
    alignItems:'center'
  },
  logoIcon: {
    top:40
  },

  /// Login Security Screen Style
  subContainer: {
    alignItems:'center'
  },
  textHere: {
    position:'absolute',
    bottom:570,
    ...Constants.Fonts.OpenSans.mediumSemiBold
  },
  
  logoContainer: {
    marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
  },
  textLabel: {
    paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3.5,
    ...Constants.Fonts.OpenSans.regular,
    color: Constants.Colors.TEXT_COLOR
  },
  orText: {
    paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
    ...Constants.Fonts.OpenSans.smallSemiBold,
    color: Constants.Colors.GRAY
  }
};

export default StyleSheet.create(styles);
