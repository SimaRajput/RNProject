import React from 'react';
import { Text, ViewPropTypes, View, StyleSheet } from 'react-native';
import { node, string } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 5,
    width: '100%',
  },
  text: {
    ...Constants.Fonts.OpenSans.large,
    alignSelf: 'center',
    color: Constants.Colors.PRIMARY_COLOR,
    textAlign: 'center',
    marginTop: 10
  },
});

const NoRecordFound = ({
  message, style, icon
}) => (
    <View style={[styles.container, style]}>
      {icon}
      <Text style={styles.text}>{message}</Text>
    </View>
  );

NoRecordFound.defaultProps = {
  message: '',
  style: {},
};

NoRecordFound.propTypes = {
  children: node,
  message: string,
  style: ViewPropTypes.style,
};

export default NoRecordFound;
