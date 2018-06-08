import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

export function* nextSaga(action) {
  yield put({
    type: actionTypes.NEXT_SLIDE
  });
}

export function* previousSaga(action) {
  yield put({
    type: actionTypes.PREV_SLIDE
  });
}
