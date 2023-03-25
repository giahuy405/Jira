import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { taskService } from '../../../services/TaskService'
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
 * task type for modal create task
 * creator : Huy - 24/3/2023
 */
export function* getAllTaskTypeSaga() {
    yield takeLatest(actionTypes.GET_ALL_TASK_TYPE, function* taskTypes({ type, payload }) {
        try {
            const res = yield call(() => taskService.getAllTaskTypes());
            console.log(res.data.content,'type')
            yield put({
                type: actionTypes.ALL_TASK_TYPE,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

 
 