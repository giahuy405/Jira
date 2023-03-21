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


