import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
  Image
} from "react-native";
import { bool, func, string, number } from "prop-types";
import Constants from "../../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const mainContainer = {
  paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
  paddingVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
  width: '95%',
  borderRadius: 8,
  // borderWidth: 1,
  borderColor: Constants.Colors.BORDER_COLOR,
  alignSelf: 'center',
  marginTop: 15
}
const styles = StyleSheet.create({
  container: {
    ...mainContainer,
  },
  avatar: {
    height: 140,
    width: 150,
    alignItems: 'center',
    borderRadius:10
  },
  titleText: {
    ...Constants.Fonts.OpenSans.large,
    width:200,
    color: Constants.Colors.PRIMARY_COLOR,
    textDecorationLine:'underline'
  },
  key: {
    ...Constants.Fonts.OpenSans.smallRegular,
  },
  value: {
    // ...Constants.Fonts.OpenSans.smallBold,
    ...Constants.Fonts.OpenSans.smallRegular,
    left: 30
  },
  buttonStyle: {
    height: 35, 
    width: 80,
    borderRadius: 60/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:Constants.Colors.PRIMARY_COLOR,
    borderWidth:1,
    borderBottomWidth:6
  },
  bottomMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    ...Constants.Fonts.OpenSans.mediumSemiBold,
    color: Constants.Colors.BUTTON_COLOR
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    top:15
  },
  rows: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  keyValueContainer: {
    justifyContent: 'space-between',
    // paddingVertical:20,
    right:20
  },
  iconView: {
    alignSelf: 'flex-end',
     top: 6, 
     right: 2 
  },
  itemContainer: {
    flexDirection: 'row', 
    paddingVertical: 12,
    justifyContent:'space-between'
  }
});

const Rows = ({ activeOpacity, title, style, icon, avatarStyle, onPress, value, rightIcon, isShowBottomView }) => {


  return (
    <View style={[styles.container, style]}>
       {isShowBottomView &&
        <View style={styles.bottomMainView}>
          <TouchableOpacity>
            <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
         
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>{'Invest'}</Text>
          </TouchableOpacity>
          <Constants.Images.Share />
          <Icon name="angle-up" size={30} color={Constants.Colors.PRIMARY_COLOR} />
        </View>

      }
      <TouchableOpacity
        activeOpacity={0.5, activeOpacity}
        onPress={onPress}
        style={styles.rowContainer}
      >
        
        <Image
        resizeMode='cover'
        source={{uri: icon}}
        style={[styles.avatar, avatarStyle]}
      />

        <View style={styles.keyValueContainer}>
          
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>{'Verdi:'}</Text>
              <Text style={styles.value}>{value}</Text>

            </View>
            <View style={styles.rows}>
              <Text style={styles.key}>{'Endring:'}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.key}>{'Utbytte/m:'}</Text>
              <Text style={styles.value}>{value}</Text>

            </View>
            <View style={styles.rows}>
              <Text style={styles.key}>{'Aksjekurs:'}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          </View>
        </View>
        <View style={styles.keyValueContainer}>
          <View style={styles.iconView}>
            {rightIcon}
          </View>
          <View>
           
          </View>
        </View>
      </TouchableOpacity >
     
    </View>
  );
};

Rows.propTypes = {
  onPress: func,
  style: ViewPropTypes.style,
  title: string.isRequired,
  value: string.isRequired,
  isShowBottomView: bool.isRequired
};

Rows.defaultProps = {
  style: {},
};


export default Rows;

