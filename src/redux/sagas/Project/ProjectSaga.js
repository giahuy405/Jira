import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { projectService } from '../../../services/ProjectService'
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
            Toast.fire({
                icon: 'success',
                title: 'Successfully created !'
            });
            navigate('/project/management')
        } catch (err) {
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
    yield takeLatest(actionTypes.GET_ALL_PROJ_KEYWORD, function* getAllProject({ type, keyword }) {
        try {
            yield delay(700)
            const res = yield call(() => projectService.getAllProject(keyword))
            yield put({
                type: actionTypes.ALL_PROJECT_KEYWORD,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err.response)
        }
    });
}

/**
 * get All project for modal create task
 * creator : Huy - 24/3/2023
 */
export function* getAllProjectKeywordSaga() {
    yield takeLatest(actionTypes.GET_ALL_PROJECT_API, function* getAllProject({ type, keyword }) {
        try {
            yield delay(700)
            const res = yield call(() => projectService.getAllProject(keyword))
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
 */
export function* updateProjectSaga() {
    yield takeLatest(actionTypes.UPDATE_PROJECT_API, function* updateProject({ type, payload }) {
        try {
            yield call(() => projectService.updateProject(payload));
            const res = yield call(() => projectService.getAllProject())
            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: res.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Successfully updated !'
            });
            console.log(res.data.content)
        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: `${err.response.data.content}`
            })
        }
    });
}

/**
 * delete project - project management page
 * creator : Huy - 23/3/2023
 */
export function* deleteProjectSaga() {
    yield takeLatest(actionTypes.DELETE_PROJECT_API, function* deleteProject({ type, id }) {
        try {
            const res = yield call(() => projectService.deleteProject(id));
            console.log(res.data.content)
            const allProject = yield call(() => projectService.getAllProject())
            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: allProject.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Successfully deleted !'
            });
            console.log(res.data.content)
        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: `${err.response.data.content}`
            })
        }
    });
}

/**
 * get user from searchTerm - project management page
 * creator : Huy - 24/3/2023
 */
export function* getUserProjectSaga() {
    yield takeLatest(actionTypes.GET_USER_PROJECT_API, function* getUserProject({ type, keyword }) {
        try {
            const res = yield call(() => projectService.getUserProject(keyword));
            // const allProject = yield call(() => projectService.getAllProject())
            yield put({
                type: actionTypes.USER_PROJECT,
                payload: res.data.content
            })
        } catch (err) {
            console.log(err)
        }
    });
}

/**
 * assign new member - project management page
 * creator : Huy - 24/3/2023
 */
export function* assignUserProjectSaga() {
    yield takeLatest(actionTypes.ASSIGN_USER_PROJECT_API, function* assignUserProject({ type, payload }) {
        try {
            const res = yield call(() => projectService.assignUserProject(payload));
            const allProject = yield call(() => projectService.getAllProject())

            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: allProject.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Successfully created !'
            });
        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: `${err.response.data.content}`
            })
            console.log(err)
        }
    });
}

/**
 * remove member - project management page
 * creator : Huy - 24/3/2023
 */
export function* removeUserFromProjSaga() {
    yield takeLatest(actionTypes.REMOVE_USER_FROM_PROJ, function* removeUserFromProj({ type, payload }) {
        try {
            const res = yield call(() => projectService.removeUserFromPrj(payload));
            const allProject = yield call(() => projectService.getAllProject())
            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: allProject.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Successfully deleted !'
            });
        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: `${err.response.data.content}`
            })
            console.log(err)
        }
    });
}

/**
 * create task - modal create task
 * creator : Huy - 25/3/2023
 */
export function* createTaskSaga() {
    yield takeLatest(actionTypes.CREATE_TASK_API, function* createTask({ type, payload }) {
        try {
            const res = yield call(() => projectService.createTaskProj(payload));
            const allProject = yield call(() => projectService.getAllProject())
            yield put({
                type: actionTypes.ALL_PROJECT,
                payload: allProject.data.content
            })
            Toast.fire({
                icon: 'success',
                title: 'Successfully created !'
            });
        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: `${err.response.data.content}`
            })
            console.log(err)
        }
    });
}


/**
 * task detail for edit modal - modal edit task
 * creator : Huy - 26/3/2023
 */
export function* getTaskDetail() {
    yield takeLatest(actionTypes.GET_TASK_DETAIL_API, function* taskDetail({ type, payload }) {
        try {
            const res = yield call(() => projectService.getTaskDetail(payload));
            yield put({
                type: actionTypes.TASK_DETAIL,
                payload: res.data.content
            })
            console.log(res.data.content)
        } catch (err) {
            console.log(err)
        }
    });
}