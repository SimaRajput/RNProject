import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
 fetchPropertyListRequested,
 fetchPropertyListFailure,
 fetchPropertyListSuccess,
 FETCH_PROPERTY_LIST
} from '../actions/property-action-types';
import { ToastActionsCreators } from 'react-native-redux-toast';
import httpClient from './http-client';

function* fetchPropertyList({ payload: { callBack },
      }) 
    {
  yield put(fetchPropertyListRequested());
  const payload = {
    method: 'get',
    url: `Property`,
  };
  const { error, result } = yield call(httpClient, payload, false, true);
  if (error) {
    yield put(fetchPropertyListFailure(error));
  } else {
    yield put(fetchPropertyListSuccess(result));
    if (callBack) {
        callBack(result);
      }
  }
}

function* property() {
    yield all([
      takeLatest(FETCH_PROPERTY_LIST, fetchPropertyList),
    ]);
  }
  
  export default property;