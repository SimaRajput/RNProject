import React from 'react';
import { StyleSheet, View, ViewPropTypes, Text  } from 'react-native';
import { string } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    padding:8,
    justifyContent:'center',
    alignItems:'center',
    top:40,
    marginBottom:25
  },
  text: {
      color: Constants.Colors.WHITE,
      ...Constants.Fonts.Helvetica.largeRegular,
      fontWeight:'normal'
  }
});
const TitleView = ({
   style,title
}) => <View style={[styles.container, style]}>
    <Text style={styles.text}>{title}</Text>
</View>;

TitleView.defaultProps = { style: {} };
TitleView.propTypes = {
    title: string.isRequired,
    style: ViewPropTypes.style,
};

export default TitleView;