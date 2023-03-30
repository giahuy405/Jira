import axios from 'axios'
import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
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
            yield put({
                type: actionTypes.ALL_TASK_TYPE,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}



/**
* update task for modal edit task
* creator : Huy - 26/3/2023
*/
export function* editTaskDetailSga() {
    yield takeLatest(actionTypes.TASK_DETAIL_ASSIGN_API, function* EditTask({ type, payload }) {
        // switch(type){
        //     case actionTypes.
        // }
        yield put({
            type: actionTypes.TASK_DETAIL_ASSIGN,
            payload: payload
        })
        let { taskDetail } = yield select(state => state.projectReducer);
        let listUserAsign = taskDetail.assigness.map(item => item.id);
        taskDetail = { ...taskDetail, listUserAsign };
        try {
            const res = yield call(() => taskService.updateTaskDetail(taskDetail));
            yield put({
                type: actionTypes.GET_PROJECT_DETAIL_API,
                id: taskDetail.projectId
            })
        } catch (err) {
            console.log(err.response)
        }
    });
    yield takeLatest(actionTypes.HANDLE_CHANGE_TASK_DETAIL, function* handleChange({ type, payload }) {
        let { taskDetail } = yield select(state => state.projectReducer);
        let listUserAsign = taskDetail.assigness.map(item => item.id);
        taskDetail = { ...taskDetail, listUserAsign };
        try {
            const res = yield call(() => taskService.updateTaskDetail(taskDetail));
            yield put({
                type: actionTypes.GET_PROJECT_DETAIL_API,
                id: taskDetail.projectId
            })
        } catch (err) {
            console.log(err.response)
        }
    })
    yield takeLatest('HANDLE_DELETE', function* handleChange({ type, payload }) {
        yield put({
            type: 'REMOVE_USER_ASSIGN',
            payload
        })
        let { taskDetail } = yield select(state => state.projectReducer);
        let listUserAsign = taskDetail.assigness.map(item => item.id);
        taskDetail = { ...taskDetail, listUserAsign };
        try {
            const res = yield call(() => taskService.updateTaskDetail(taskDetail));
            yield put({
                type: actionTypes.GET_PROJECT_DETAIL_API,
                id: taskDetail.projectId
            })
        } catch (err) {
            console.log(err.response)
        }
    })
}



