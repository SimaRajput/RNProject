import React, { PureComponent } from 'react';
import { StyleSheet, View, Image,ImageBackground,Text } from 'react-native';
import { func, shape } from 'prop-types';
import Constants from '../constants';
import { Button } from '../components';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Constants.Colors.WHITE,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    borderColor: Constants.Colors.WHITE,
  },
  buttonStyle1: {
    backgroundColor: Constants.Colors.TRANSPARENT,
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    borderColor: Constants.Colors.WHITE,
    borderWidth:1
  },
  container: { flex: 1 },
  content: {
    position:'absolute',
    bottom:30,
    alignSelf:'center'
  },
  logoStyle: {
    alignSelf: 'center',
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
    marginVertical: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 10,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 50,
  },
  imagebackground: {
    height:null,
    width:null,
    flex:1
    
  },
  textStyle: {
    color:Constants.Colors.BUTTON_COLOR
  },
  subContainer: {
    alignItems:'center',
    top:40
  },
  textHere: {
    position:'absolute',
    bottom:80,
    ...Constants.Fonts.OpenSans.mediumSemiBold
  }
});

class Welcome extends PureComponent {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      navigate: func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation: { navigate } } = this.props;
    const {
      signup: { signup },
      login : { login },
      common: { textHere }
    } = Constants.i18n;

    return (
        <ImageBackground source={Constants.Images.welcome} style={styles.imagebackground} >
        <View style={styles.subContainer}>
      <Constants.Images.Bubble/>
      <Text style={styles.textHere}>{textHere}</Text>
      </View>
        <View style={styles.content}>
          <Button
            onPress={() => navigate('LoginSecurity')}
            style={styles.buttonStyle}
            title={login}
            textStyle={styles.textStyle}
          />
          <Button
            onPress={() => navigate('Signup')}
            style={styles.buttonStyle1}
            title={signup}
          />
        </View>
        </ImageBackground>  
    );
  }
}

export default Welcome;

