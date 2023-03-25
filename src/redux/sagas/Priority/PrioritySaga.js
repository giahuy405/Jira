import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { priorityService } from '../../../services/PriorityService'
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
 * get all priority for modal create task
 * creator : Huy - 24/3/2023
 */
export function* getAllPriority() {
    yield takeLatest(actionTypes.GET_ALL_PRIORITY, function* allPriority({ type, id }) {
        try {
            const res = yield call(() => priorityService.fetchPriority(id));
            yield put({
                type: actionTypes.ALL_PRIORITY,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

