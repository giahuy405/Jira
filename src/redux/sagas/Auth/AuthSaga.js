import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { authService } from '../../../services/AuthService'


import * as authType from '../../constants/Auth/AuthConstant'
import * as homeType from '../../constants/Home/HomeConstant'

function* callAPI({ type, payload }) {
    try {
        yield put({
            type: homeType.DISPLAY_LOADING
        })
        yield delay(500)
        // call api below
        const res = yield authService.testAPI()
        yield put({
            type: 'HAHA',
            payload: res.data.content
        })
        yield put({
            type: homeType.HIDE_LOADING
        })

    } catch (err) {
        console.log(err)
    }
}

export function* loginSaga() {
    yield takeLatest(authType.LOGIN_API, callAPI)
}