import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { commentService } from '../../../services/CommentService'
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
 * get all cmt for modal edit task
 * creator : Huy - 28/3/2023
 */
export function* getAllCommentSaga() {
    yield takeLatest(actionTypes.GET_ALL_CMT_API, function* getAllCmt({ type, taskId }) {
        try {
            const res = yield call(() => commentService.getAllComments(taskId));
            console.log(taskId,'saga')
            console.log(res.data.content, 'taskId cmt')
            yield put({
                type: actionTypes.ALL_CMT,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

