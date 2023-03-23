import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { projectService } from '../../../services/ProjectService'
import Swal from 'sweetalert2'
import * as actionTypes from '../../constants/constants'

/**
 * fetch Project Category for CreateProject page
 * creator : Huy - 21/3/2023
 */
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

/**
 * create project for CreateProject page
 * creator : Huy - 21/3/2023
 */
export function* createProjectSaga() {
    yield takeLatest(actionTypes.CREATE_PROJECT_API, function* createProject({ type, payload, navigate }) {
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
            });
            navigate('/project/management')
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

/**
 * get All project for Project Management page
 * creator : Huy - 22/3/2023
 */
export function* getAllProjectSaga() {
    yield takeLatest(actionTypes.GET_ALL_PROJECT_API, function* getAllProject({ type, payload }) {
        try {
            yield delay(800)
            const res = yield call(() => projectService.getAllProject())
            console.log(res.data.content)
            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

/**
 * get project detail for Modal Edit Project
 * creator : Huy - 22/3/2023
 */
export function* getProjectDetailSaga() {
    yield takeLatest(actionTypes.GET_PROJECT_DETAIL_API, function* projectDetail({ type, id }) {
        try {
            const res = yield call(() => projectService.getProjectDetail(id));
            yield put({
                type: actionTypes.PROJECT_DETAIL_INFO,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

/**
 * update project - modal edit page
 * creator : Huy - 22/3/2023
 * error : STATUS CODE 403 - FORBIDDEN
 */
export function* updateProjectSaga() {
    yield takeLatest(actionTypes.UPDATE_PROJECT_API, function* updateProject({ type, payload }) {
        try {
            const res = yield call(() => projectService.updateProject(payload));
            console.log(res.data.content)
        } catch (err) {
            console.log(err.response)
        }
    });
}