import { all } from 'redux-saga/effects';
import { watchTaskList } from './taskSaga';

export default function* rootSaga() {
    yield all([watchTaskList()])
}