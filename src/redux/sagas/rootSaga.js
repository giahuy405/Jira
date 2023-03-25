import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as AuthSaga from './Auth/AuthSaga'
import * as ProjectSaga from './Project/ProjectSaga'
export function* rootSaga() {
    yield all([  
        AuthSaga.authSaga(),

        ProjectSaga.projectCategorySaga(),
        ProjectSaga.createProjectSaga(),
        ProjectSaga.getAllProjectSaga(),
        ProjectSaga.getProjectDetailSaga(),
        ProjectSaga.updateProjectSaga(),
        ManagerSaga.managerSaga(),
        ProjectSaga.deleteProjectSaga(),
        ProjectSaga.getUserProjectSaga(),
        ProjectSaga.assignUserProjectSaga(),
        ProjectSaga.removeUserFromProjSaga(),
        ProjectSaga.getAllProjectKeywordSaga(),

        TaskSaga.getAllTaskTypeSaga(),

        PrioritySaga.getAllPriority(),

        UsersSaga.getAllUsersSaga(),
        UsersSaga.getUserByIdSaga(),

        StatusSaga.getAllStatusSaga()
    ])

}