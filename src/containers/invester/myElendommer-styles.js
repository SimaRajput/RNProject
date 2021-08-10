import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
    },
    subContainer: {
      paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2.5,

    },
    textStyle: {
        marginRight:200
    },
    text: {
      ...Constants.Fonts.Helvetica.large
    },
    cardView: {
      paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
      backgroundColor:Constants.Colors.WHITE,
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderWidth:.5,
      borderColor: Constants.Colors.GRAY,
      marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2.5,
    },
    rowContainer: {
      flexDirection:'row',
    },
    icon: {
      height:100,
      width:100,
      alignSelf:'center',
      borderRadius:8
    },
    itemContainer: {
      paddingHorizontal:20,
      padding:20,
      paddingVertical:10,
    },
    key: {
      ...Constants.Fonts.OpenSans.smallRegular,
    },
    key1: {
      ...Constants.Fonts.OpenSans.smallRegular,
    },
    value1: {
      ...Constants.Fonts.OpenSans.smallBold,
    },
    value: {
      ...Constants.Fonts.OpenSans.smallBold,
      left: 90,
    },
    keyValueContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      paddingVertical: 5
    },
    bottomView: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:15
    },
    keys: {
      ...Constants.Fonts.OpenSans.regularBold,
    },
    values: {
      ...Constants.Fonts.OpenSans.mediumSemiBold,
    },
    buttonStyle: {
        height: 35, 
        backgroundColor: Constants.Colors.SECONDARY_COLOR,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width:'25%',
        alignSelf:'center',
        ...Constants.BaseStyle.SHADOW_STYLE
      },
      text1: {
        ...Constants.Fonts.OpenSans.mediumSemiBold,
        color: Constants.Colors.BUTTON_COLOR
      },
      textLabel: {
          textAlign:'center',
          ...Constants.Fonts.Helvetica.small,
          marginTop:15
      },
      headerStyle: {
        borderBottomColor:Constants.Colors.BORDER_COLOR,
        borderWidth:1,
        borderTopColor: Constants.Colors.WHITE,
        borderRightColor:Constants.Colors.WHITE,
        borderLeftColor:Constants.Colors.WHITE
      },
      smallCardView: {
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2.5,
          
      },
      cardContainer: {
        paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
        borderRadius: 12,
        borderColor: Constants.Colors.BORDER_COLOR_2,
        borderWidth:1,
        backgroundColor: Constants.Colors.WHITE,
        height:120,
        ...Constants.BaseStyle.SHADOW_STYLE,
        alignItems:'center',
      },
      textStyles: {
        ...Constants.Fonts.OpenSans.extraSmallRegular,
        textAlign:'center',
        top:10
      },
      iconStyle: {
        top:20,
      },
      textStyles1: {
        ...Constants.Fonts.OpenSans.extraSmallRegular,
        textAlign:'center',
        top:25
      },
      bottomViewStyle: {
        backgroundColor:Constants.Colors.LIGHT_GREEN,
        height:25,width:'80%',
        borderRadius:16,
        bottom:-15,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
      },
      valueText: {
        ...Constants.Fonts.OpenSans.extraSmallBold,
        color: Constants.Colors.PRIMARY_COLOR,
        alignSelf:'center'
      },
      mainContainer: {
        marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
      },
      imageIcon: {
        height:30,
        width:30,
      },
      imageIcon2: {
        height:25,
        width:25,
      },
      carouselMainContainer: {
        flex:1,
        height:250,
        alignSelf:'center',
        alignItems:'center',
        paddingHorizontal:100,
        borderRadius:16,
        width:'70%'
      },
      rowStyle: {
        flexDirection:'row',
        alignItems:'center'
      },
      carouselStyle: {
        borderWidth:0,
        borderRadius:16,
        flex:1,
        alignItems:'center'
      },
      labelText: {
        ...Constants.Fonts.Helvetica.extraLargeBold,
        color: Constants.Colors.BLACK
      },
      locationStyle: {
        borderRadius:6,
        borderColor: Constants.Colors.BORDER_COLOR,
        borderWidth:1.5,
        height:250,
        paddingHorizontal:10,
        marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
      },
      maps: {
        flex: 1,
        height: null,
        width: null
      },
      locationContainer: {
        marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
      },
      aksjeStyle: {
        marginTop:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
        bottom:30
      },
      overSickContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
      },
      rowItems: {
        paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
        borderRadius: 12,
        borderColor: Constants.Colors.BORDER_COLOR_2,
        borderWidth:1,
        backgroundColor: Constants.Colors.WHITE,
        height:150,
        ...Constants.BaseStyle.SHADOW_STYLE,
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
        width:'46%',
        justifyContent:'center'
      },
      rows: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:3
      },
      textTitle: {
        textAlign:'center',
        marginTop:2
      },
      documentsContainer: {
        paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
        borderRadius: 12,
        borderColor: Constants.Colors.BORDER_COLOR_2,
        borderWidth:1,
        backgroundColor: Constants.Colors.WHITE,
        ...Constants.BaseStyle.SHADOW_STYLE,
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
        paddingVertical:15,
      },
      documentItems: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5,
        marginTop:5
      },
      docTitleText: {
        ...Constants.Fonts.OpenSans.large,
        right:5
      },
      docSubContainer: {
        alignItems:'center'
      },
      docViewStyle: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
      },
      docTitle: {
        top:2,
        ...Constants.Fonts.OpenSans.smallRegular,
      },
      infoContainer: {
        paddingHorizontal:(Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
        borderRadius: 12,
        borderColor: Constants.Colors.BORDER_COLOR_2,
        borderWidth:1,
        backgroundColor: Constants.Colors.WHITE,
        ...Constants.BaseStyle.SHADOW_STYLE,
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
        paddingVertical:15,
        marginBottom:10
      },
      infoSubContainer: {
        flexDirection:'row',
        alignSelf:'center'
      },
      infoRowContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
      },
      infoKey: {
        ...Constants.Fonts.OpenSans.regular
      },
      infoValue: {
        ...Constants.Fonts.OpenSans.regularBold
      },
      infoTitle: {
        ...Constants.Fonts.OpenSans.large
      }
    
    
  
  });

  export default styles;