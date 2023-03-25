import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { statusService } from '../../../services/StatusSerivce'
import Swal from 'sweetalert2'
import * as actionTypes from '../../constants/constants'

/**
 * get all status for modal create task
 * creator : Huy - 25/3/2023
 */
export function* getAllStatusSaga() {
    yield takeLatest(actionTypes.GET_ALL_STATUS, function* allStatus({ type }) {
        try {
            const res = yield call(() => statusService.fetchAllStatus());
            yield put({
                type: actionTypes.ALL_STATUS,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

