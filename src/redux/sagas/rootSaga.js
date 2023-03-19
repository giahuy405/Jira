import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as AuthSaga from './Auth/AuthSaga'
export function* rootSaga() {
    yield all([
        // normal


        // call api
        AuthSaga.loginSaga()

    ])

}