import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as AuthSaga from './Auth/AuthSaga'
import * as ProjectSaga from './Project/ProjectSaga'
import * as TaskSaga from './Task/TaskSaga'
import * as PrioritySaga from './Priority/PrioritySaga'
import * as UsersSaga from './Users/UsersSaga'
import * as StatusSaga from './Status/StatusSaga'
import * as ManagerSaga from './Manager/managerSaga'
import * as CommentSaga from './Comments/CommentsSaga'


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
        ProjectSaga.createTaskSaga(),
        ProjectSaga.getTaskDetail(),

        TaskSaga.getAllTaskTypeSaga(),
        TaskSaga.editTaskDetailSga(),
        CommentSaga.getAllCommentSaga(),

        PrioritySaga.getAllPriority(),

        UsersSaga.getAllUsersSaga(),
        UsersSaga.getUserByIdSaga(),

        StatusSaga.getAllStatusSaga(),
    ])

}