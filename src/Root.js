import React from 'react';
import {StyleSheet, View, Platform, StatusBar, SafeAreaView} from 'react-native';
import {Toast} from 'react-native-redux-toast';
import Navigator from './config/navigator';
import Constants from './constants';
import {Progress} from './components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.White,
    flex: 1,
  },
  errorStyle: {backgroundColor: Constants.Colors.ERROR},
  messageStyle: {
    color: Constants.Colors.WHITE,
    ...Constants.Fonts.regular,
  },
  toastContainerStyle: {backgroundColor: Constants.Colors.BLACK},
  warningStyle: {backgroundColor: Constants.Colors.WARNING},
});

const Root = () => (
  <SafeAreaView style={{flex:1}}>
  <View style={styles.container}>
    {Platform.OS === 'android' && (
      <StatusBar backgroundColor={Constants.Colors.WHITE} barStyle={'dark-content'}/>
    )}
    <Progress />
    <Navigator />
    <Toast
      errorStyle={styles.errorStyle}
      warningStyle={styles.warningStyle}
      containerStyle={styles.toastContainerStyle}
      messageStyle={styles.messageStyle}
    />
  </View>
  </SafeAreaView>
);

export default Root;
