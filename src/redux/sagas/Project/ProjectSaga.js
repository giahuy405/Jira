import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { projectService } from '../../../services/ProjectService'
import Swal from 'sweetalert2'

import * as actionTypes from '../../constants/constants'


export function* projectCategorySaga() {
    yield takeLatest(actionTypes.PROJECT_CATEGORY_API, function* projectCategory({ type, payload }) {
        try {
            const res = yield call(() => projectService.fetchProjectCategory());
            console.log(res.data.content)
            yield put({
                type: actionTypes.PROJECT_CATEGORY,
                payload: res.data.content
            })

        } catch (err) {
            console.log(err.response)
        }
    });
}


export function* createProjectSaga() {
    yield takeLatest(actionTypes.CREATE_PROJECT_API, function* createProject({ type, payload }) {
        try {
            const res = yield call(() => projectService.createProject(payload));
            console.log(res.data.content)
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
                title: 'Successfully created !'
            })
        } catch (err) {
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
                icon: 'error',
                title: `${err.response.data.content}`
            })
            console.log(err.response)
        }
    });

}