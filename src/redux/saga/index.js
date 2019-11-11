import {all, fork} from 'redux-saga/effects';

import animals from './animals';

export default function* root() {
  yield all([
    fork(animals)
  ]);
}
