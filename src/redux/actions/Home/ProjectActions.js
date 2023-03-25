import * as actionTypes from '../../constants/constants'

export const setActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: true };
export const closeActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: false }
export const OpenModalEditAction = { type: actionTypes.OPEN_MODAL_EDIT }
export const CloseModaEditlAction = { type: actionTypes.CLOSE_MODAL_EDIT }
export const getUserProject = { type: actionTypes.USER_PROJECT }
export const OpenModalTaskAction = { type: actionTypes.OPEN_MODAL_TASK }
export const CloseModalTaskAction = { type: actionTypes.CLOSE_MODAL_TASK }


/* API */
export const projectCategoryAction = { type: actionTypes.PROJECT_CATEGORY_API }
export const createTaskAction = payload => ({
    type: actionTypes.CREATE_TASK_API,
    payload
})
export const createProjectAction = (payload, navigate) => ({
    type: actionTypes.CREATE_PROJECT_API,
    payload,
    navigate
})
export const getAllProjectAction = keyword => ({
    type: actionTypes.GET_ALL_PROJECT_API,
    keyword
})
export const getAllProjKeywordAction = keyword => ({
    type: actionTypes.GET_ALL_PROJ_KEYWORD,
    keyword
})
export const getProjectDetail = (id) => ({
    type: actionTypes.GET_PROJECT_DETAIL_API,
    id
})
export const updateProjectAction = (payload) => ({
    type: actionTypes.UPDATE_PROJECT_API,
    payload
})
export const deleteProjectAction = (id) => ({
    type: actionTypes.DELETE_PROJECT_API,
    id
})
export const getUserProjectAction = (keyword) => ({
    type: actionTypes.GET_USER_PROJECT_API,
    keyword
})
export const assignUserProjectAction = (payload) => ({
    type: actionTypes.ASSIGN_USER_PROJECT_API,
    payload
})
export const removeUserFromProjAction = (payload) => ({
    type: actionTypes.REMOVE_USER_FROM_PROJ,
    payload
})
export const getTaskDetailAction = (payload) => ({
    type: actionTypes.GET_TASK_DETAIL_API,
    payload
})