import * as actionTypes from '../../constants/constants'

export const setActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: true };
export const closeActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: false }
export const OpenModalEditAction = { type: actionTypes.OPEN_MODAL_EDIT }
export const CloseModaEditlAction = { type: actionTypes.CLOSE_MODAL_EDIT }


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