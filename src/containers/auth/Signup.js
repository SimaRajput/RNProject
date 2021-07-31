import React from 'react';
import {
  Keyboard,
  findNodeHandle,
  View,
  Image,
  ScrollView,
  Text,
  Platform,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import _ from 'lodash';
import {func, shape} from 'prop-types';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import {ToastActionsCreators} from 'react-native-redux-toast';
import Regex from '../../utilities/Regex';
import Constants from '../../constants';
import {AuthStyles} from '../../styles';
import {Button, TextInput,Header} from '../../components';
import { TextField } from 'react-native-material-textfield';

class Signup extends React.Component {
  static propTypes = {
    navigation: shape({
      dispatch: func.isRequired,
      goBack: func.isRequired,
      navigate: func.isRequired,
    }).isRequired,
  };

  state = {
    fullName :'',
    fullNameError:'',
    emailError: '',
    email: '',
    password: '',
    zipCode: '',
    getEmailUpdate: false
  };

  fullnameRef = React.createRef();

  emailRef = React.createRef();

  zipCodeRef = React.createRef();

  passwordRef = React.createRef();

  scrollViewRef = React.createRef();

  changeHandler = (state, value) => {
    this.setState({ [state]: value, [state + 'Error']: '' });
  }

  onSubmit = () => {
    Keyboard.dismiss();

    const { fullName, email, password } = this.state;
    const {
      navigation: {dispatch, navigate},
    } = this.props;
    const {
      enterEmail,
      enterValidEmail,
      enterPassword,
      invalidPassword,
    } = Constants.i18n.validations;

    if (_.isEmpty(fullName.trim())) {
      dispatch(ToastActionsCreators.displayInfo(enterEmail));

      return;
    }

    if (!Regex.validateEmail(email.trim())) {
      dispatch(ToastActionsCreators.displayInfo(enterValidEmail));

      return;
    }

    if (_.isEmpty(password.trim())) {
      dispatch(ToastActionsCreators.displayInfo(enterPassword));

      return;
    }

    if (!Regex.validatePassword(password.trim())) {
      dispatch(ToastActionsCreators.displayInfo(invalidPassword));

      return;
    }

    navigate('Success');
  };

  handleScrollView = ref => {
    const context = this;
    const scrollResponder = context.scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        ref,
        (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 20,
        true,
      );
    }, 300);
  };

  resetScrollView = ref => {
    const context = this;
    const scrollResponder = context.scrollViewRef.current.getScrollResponder();

    context.setTimeout(() => {
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(ref, 0, true);
    }, 300);
  };

  render() {
    const {fullName, email, password, fullNameError,emailError, getEmailUpdate, zipCode } = this.state;
    const {
      navigation: {navigate},
    } = this.props;
    const {
      common: { emailAddress, password: passwordText, or },
      signup: { alreadyUser, createAccount, personalDetails, fullnameLabel , getupdatefromEmail,zipCideLabel },
      login : { emailId },
    } = Constants.i18n;

    return (
      <View style={AuthStyles.container}>
        <Header hideRightIcon={true}/>
        <Text style={AuthStyles.label}>{personalDetails}</Text>
        <View style={AuthStyles.content}>
          <ScrollView
            ref={this.scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            {/* <TextInput
              container={AuthStyles.signupTextInputContainer}
              ref={this.emailRef}
              value={fullName}
              placeholder={fullnameLabel}
              returnKeyType="next"
              onChangeText={value => this.setState({email: value})}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.emailRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.emailRef.current));
              }}
              onSubmitEditing={() => this.passwordRef.current.focus()}
            /> */}
            <TextField
            activeLineWidth={1}
            ref={this.fullnameRef}
            label={fullnameLabel}
            labelFontSize={12}
            value={fullName}
            onChangeText={text => this.changeHandler('fullName', text)}
            tintColor={Constants.Colors.GRAY}
            errorColor={Constants.Colors.ERROR}
            error={fullNameError}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            placeholderTextColor={Constants.Colors.GRAY}
            labelTextStyle={Constants.Colors.BLACK}
            titleTextStyle={Constants.Colors.BLACK}
            labelPadding={15}
            containerStyle={{ marginBottom: 15 }}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            onFocus={() => {
              this.handleScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            onBlur={() => {
              this.resetScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            onSubmitEditing={() => this.emailRef.current.focus()}
          />
            <TextField
            activeLineWidth={1}
            ref={this.emailRef}
            label={emailId}
            labelFontSize={12}
            value={fullName}
            onChangeText={text => this.changeHandler('fullName', text)}
            tintColor={Constants.Colors.GRAY}
            errorColor={Constants.Colors.ERROR}
            error={emailError}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            placeholderTextColor={Constants.Colors.GRAY}
            labelTextStyle={Constants.Colors.BLACK}
            titleTextStyle={Constants.Colors.BLACK}
            labelPadding={15}
            containerStyle={{ marginBottom: 15 }}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            onFocus={() => {
              this.handleScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            onBlur={() => {
              this.resetScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            // onSubmitEditing={() => this.passwordRef.current.focus()}
          />
          <View style={AuthStyles.getUpdate}>
           <CheckBox tintColors={{ true: Constants.Colors.BUTTON_COLOR, }} value={getEmailUpdate} onValueChange={() => this.setState({ getEmailUpdate: !getEmailUpdate })} />
           <Text style={AuthStyles.getUpdateText}>{getupdatefromEmail}</Text>
           </View>
           <TextField
            activeLineWidth={1}
            ref={this.zipCodeRef}
            label={zipCideLabel}
            labelFontSize={12}
            value={zipCode}
            onChangeText={text => this.changeHandler('zipCode', text)}
            tintColor={Constants.Colors.GRAY}
            errorColor={Constants.Colors.ERROR}
            error={emailError}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            placeholder={'Enter here'}
            placeholderTextColor={Constants.Colors.GRAY}
            labelTextStyle={Constants.Colors.BLACK}
            titleTextStyle={Constants.Colors.BLACK}
            labelPadding={15}
            containerStyle={{ marginBottom: 15 }}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
            onFocus={() => {
              this.handleScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            onBlur={() => {
              this.resetScrollView(findNodeHandle(this.fullnameRef.current));
            }}
            // onSubmitEditing={() => this.passwordRef.current.focus()}
          />
            <TextInput
              ref={this.passwordRef}
              value={password}
              placeholder={passwordText}
              returnKeyType="done"
              secureTextEntry
              maxLength={16}
              onChangeText={pass => this.setState({password: pass})}
              onFocus={() => {
                this.handleScrollView(findNodeHandle(this.passwordRef.current));
              }}
              onBlur={() => {
                this.resetScrollView(findNodeHandle(this.passwordRef.current));
              }}
              onSubmitEditing={this.onSubmit}
            />
            <Button
              onPress={this.onSubmit}
              style={AuthStyles.buttonStyle}
              title={createAccount}
            />
            <Text style={AuthStyles.sepratorStyle}>{or}</Text>
            <TouchableOpacity
              hitSlop={Constants.BaseStyle.HIT_SLOP}
              onPress={() => navigate('Login')}
              activeOpacity={0.9}>
              <Text style={AuthStyles.textDecorationLineStyle}>
                {alreadyUser}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
ReactMixin(Signup.prototype, TimerMixin);

export default Signup;
