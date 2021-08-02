import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
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
    headerStyle :{
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    }
  });

  export default styles;