import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { authService } from '../../../services/AuthService'
import Swal from 'sweetalert2'

import * as actionTypes from '../../constants/constants'


export function* loginSaga() {
    yield takeLatest(actionTypes.LOGIN_API, function* login({ type, payload, navigate }) {
        try {
            yield put({
                type: actionTypes.DISPLAY_LOADING
            })
            yield delay(500)
            // call api below
            const res = yield authService.login(payload);
            console.log(res.data.content)
            yield put({
                type: actionTypes.LOGIN_INFO,
                payload: res.data.content
            })
            yield put({
                type: actionTypes.HIDE_LOADING
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2600,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Login success !'
            })
            navigate('/project')
        } catch (err) {
            console.log(err);
            yield put({
                type: actionTypes.HIDE_LOADING
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2600,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            let content = ''
            console.log(err.response.data.message)
            if (err.response.data.message === 'Email không tồn tại !') {
                content = `Email doesn't exist`
            } else {
                content = `Wrong password`
            }
            Toast.fire({
                icon: 'error',
                title: `${content}`
            })
        }
    });
}

export function* signUpSaga() {
    yield takeLatest(actionTypes.SIGN_UP_API, function* signUp({ type, payload, navigate }) {
        try {
            yield put({
                type: actionTypes.DISPLAY_LOADING
            })
            yield delay(500)
            // call api below
            const res = yield authService.signUp(payload);
            yield put({
                type: actionTypes.HIDE_LOADING
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 100000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Account have been created'
            })
            yield delay(500)
            navigate('/login');
        }
        catch (err) {
            yield put({
                type: actionTypes.HIDE_LOADING
            })
            console.log(err);
            let content = ''
            console.log(err.response.data.message)

            if (err.response.data.message === 'Email đã được sử dụng!') {
                content = `Email already used`
            }
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: `${content}`
            })
        }
    })
}