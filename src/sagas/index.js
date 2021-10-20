import {all} from 'redux-saga/effects';
import user from './user';
import property from './property'

const sagas = function* sagas() {
  yield all([
    user(),
    property()
  ]);
};

export default sagas;
