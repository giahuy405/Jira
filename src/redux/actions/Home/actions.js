import * as actionTypes from '../../constants/constants'

export const setActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: true };
export const closeActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: false }
export const OpenModalEditAction = { type: actionTypes.OPEN_MODAL_EDIT }
export const CloseModaEditlAction = { type: actionTypes.CLOSE_MODAL_EDIT }
export const getUserProject = { type: actionTypes.USER_PROJECT }


/* API */
export const projectCategoryAction = { type: actionTypes.PROJECT_CATEGORY_API }
export const createProjectAction = (payload, navigate) => ({
    type: actionTypes.CREATE_PROJECT_API,
    payload,
    navigate
})
export const getAllProjectAction = { type: actionTypes.GET_ALL_PROJECT_API }
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