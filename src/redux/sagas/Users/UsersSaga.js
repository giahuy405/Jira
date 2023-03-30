import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { usersService } from '../../../services/UsersService'
import Swal from 'sweetalert2'
import * as actionTypes from '../../constants/constants'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


/**
 * users list for modal create task
 * creator : Huy - 24/3/2023
 */
export function* getAllUsersSaga() {
    yield takeLatest(actionTypes.GET_ALL_USERS, function* getAllUsers({ type, keyword }) {
        try {
            const res = yield call(() => usersService.getUsers(keyword));
            yield put({
                type: actionTypes.ALL_USERS,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

/**
* users list by id project for modal create task
* creator : Huy - 24/3/2023
*/
export function* getUserByIdSaga() {
    yield takeLatest(actionTypes.GET_USERS_BY_ID_PROJECT, function* userById({ type, idProject }) {
        try {
            const res = yield call(() => usersService.getUserByIdProj(idProject));

            yield put({
                type: actionTypes.USERS_BY_ID_PROJ,
                payload: res.data.content
            })
        } catch (err) {
            Toast.fire({
                timer: 3000,
                icon: 'error',
                text: `${err.response.data.content} 
                Please choose another
                `
            });
            console.log(err.response)
        }
    });
}

