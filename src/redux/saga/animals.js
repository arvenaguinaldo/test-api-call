import {all, takeEvery, put, call, fork} from 'redux-saga/effects';
import * as tokenActions from '../../redux/actions/Token';
import * as animalsActions from '../../redux/actions/Animals';
import * as animalsService from '../../services/animals';

import {GET_TOKEN, FETCH_ANIMALS} from '../../redux/actions/types/Animals';
//* *********** Subroutines ************//

function* getToken(action) {
  const response = yield call(animalsService.getToken, action.params);
  if (response) {
    if (response.error) {
      // yield call(callErrorNotification, `Could not fetch data: ${response.error}`);
      console.log('error')
    } else {
      yield put(tokenActions.getTokenSuccess(response));
      localStorage.setItem('token', response.data.access_token);
    }
  }
}

function* fetchAnimals(action) {
  const response = yield call(animalsService.fetchAnimals, action.params);
  if (response) {
    if (response.error) {
      // yield call(callErrorNotification, `Could not fetch data: ${response.error}`);
      console.log('error')
    } else {
      console.log(response);
      yield put(animalsActions.fetchAnimalsSuccess(response));
    }
  }
}

//* *********** Watchers ************//

function* watchRequest() {
  yield takeEvery(GET_TOKEN, getToken);
}

function* watchRequestFetchAnimals() {
  yield takeEvery(FETCH_ANIMALS, fetchAnimals);
}


export default function* animals() {
  yield all([
    fork(watchRequest),
    fork(watchRequestFetchAnimals)
  ]);
}
