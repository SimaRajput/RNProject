import ChangePassword from '../containers/auth/change-password';
import Dashboard from '../containers/Dashboard';
import ForgotPassword from '../containers/auth/forgot-password';
import {Loader} from '../components';
import Login from '../containers/auth/Login';
import Signup1 from '../containers/auth/Signup1';
import Welcome from '../containers/Welcome';
import LoginSecurity from '../containers/auth/login-security'

export default {
  ChangePassword: {screen: ChangePassword},
  Dashboard: {screen: Dashboard},
  ForgotPassword: {screen: ForgotPassword},
  Loader: {screen: Loader},
  Login: {screen: Login},
  Signup1: {screen: Signup1},
  Welcome: {screen: Welcome},
  LoginSecurity: {screen: LoginSecurity}
};
