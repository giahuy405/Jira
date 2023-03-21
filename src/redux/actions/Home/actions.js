import * as actionTypes from '../../constants/constants'

export const setActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: true };
export const closeActiveMenuAction = { type: actionTypes.SET_ACTIVE_MENU, payload: false }

/* API */
export const projectCategoryAction = { type: actionTypes.PROJECT_CATEGORY_API }