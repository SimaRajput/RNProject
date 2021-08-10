import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
      top:10

    },
    rowStyle:  { 
      padding: Constants.BaseStyle.PADDING },
    textStyle: { 
      ...Constants.Fonts.regular 
    },
    leftIconStyle: {
        height:45,
        width:45
    },
    rightIconStyle: {
      height:30,
      width:30
    },
    headerStyle :{
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    bubbleView: {
      alignItems:'center',
      bottom:80
    },
    titleView: {
    marginTop:20,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    },
    title: {
      ...Constants.Fonts.OpenSans.extraLargeBold,
    },
    viewAll: {
      ...Constants.Fonts.OpenSans.smallBold,
      color: Constants.Colors.PRIMARY_COLOR
    },
    subConatiner: {
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
      paddingHorizontal:5
    },
    titleText: {
      ...Constants.Fonts.OpenSans.largeBold
    },
    titleText1: {
      ...Constants.Fonts.OpenSans.smallBold,
      // marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    },
    itemKey: {
      ...Constants.Fonts.OpenSans.smallRegular,
    },
    itemValue: {
      ...Constants.Fonts.OpenSans.semiSmallBold,
    },
    itemValue1: {
      ...Constants.Fonts.OpenSans.regular,
    },
    topContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    },
    secondTopContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    },
    rowContainer: {
      borderColor:Constants.Colors.BUTTON_COLOR,
      borderWidth:1,
      paddingHorizontal:5,
      height:30,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      right:120
    },
    rowContainer1: {
      borderColor:Constants.Colors.BUTTON_COLOR,
      borderWidth:1,
      paddingHorizontal:5,
      height:30,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      right:20
    },
    iconStyle: {
      position:'absolute',
      right:20
    },
    textInfo: {
      color: Constants.Colors.PRIMARY_COLOR,
      ...Constants.Fonts.Helvetica.regular
    }
  
  
  });

  export default styles;